<template>

  <table>
    <thead>
      <th>#</th>
      <th>Name</th>
      <th>Price</th>
      <th>24h %</th>
      <th>Market Cap</th>
      <th>Graph 24 hrs.</th>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>
          <div class="crypto-coin">
            <img :src="coin.image" alt="crypto" class="crypto-image" />
            <div class="crypto-name">
              <h2>{{ coin.name }}</h2><span>{{ coin.symbol }}</span>
            </div>
          </div>
        </td>
        <td>
          <p>Price: ${{ coin.current_price.toLocaleString() }}</p>
        </td>
        <td>
          <p
            :class="{ 'text-success': coin.price_change_percentage_24h > 0, 'text-danger': coin.price_change_percentage_24h < 0 }">
            24h Change: {{ coin.price_change_percentage_24h.toFixed(2) }}%
          </p>
        </td>
        <td>
          <p>Market Cap: ${{ coin.market_cap.toLocaleString() }}</p>
        </td>
        <td><svg class="sparkline" :viewBox="'0 0 ' + sparklineWidth + ' 50'" preserveAspectRatio="none">
            <polyline :points="sparklinePoints" fill="none" :stroke="lineColor" stroke-width="2" />
          </svg></td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
  props: {
    coin: {
      type: Object,
      required: true,
    },
  },
  computed: {
    sparklineWidth() {
      return 100; // ความกว้างของกราฟ
    },
    sparklinePoints() {
      const prices = this.coin.sparkline_in_7d.price;
      const max = Math.max(...prices);
      const min = Math.min(...prices);
      const scaleX = this.sparklineWidth / prices.length;
      const scaleY = 50 / (max - min);

      return prices
        .map((price, index) => `${index * scaleX},${50 - (price - min) * scaleY}`)
        .join(" ");
    },
    lineColor() {
      const priceChange = this.coin.price_change_percentage_24h;
      if (priceChange > 5) {
        return "#388E3C"; // สีเขียวเข้มสำหรับการเพิ่มที่มาก
      } else if (priceChange < -5) {
        return "#D32F2F"; // สีแดงเข้มสำหรับการลดที่มาก
      }
      return priceChange > 0 ? "#4caf50" : "#f44336"; // สีเขียวหรือแดงตามปกติ
    },
  },

};
</script>

<style scoped>

.sparkline {
  width: 100%;
  height: 50px;
  margin-top: 8px;
}

.text-success {
  color: #4caf50;
}

.text-danger {
  color: #f44336;
}
</style>
