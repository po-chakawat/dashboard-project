<template>
  <tbody>
    <tr>
      <td>
        <!-- Add to Watchlist -->
        <button
          class="watchlist-button"
          @click="toggleWatchlist(coin.id)"
          :class="{ 'added': isInWatchlist(coin.id) }"
        >
          <span v-if="isInWatchlist(coin.id)">★</span>
          <span v-else>☆</span>
        </button>
      </td>
      <td>{{ coin.market_cap_rank }}</td>
      <td>
        <div class="coin">
          <img :src="coin.image" alt="crypto" class="coin__image" />
          <div class="coin__name">
            <p class="coin__name-name">{{ coin.name }}</p>
            <p class="coin__name-symbol">{{ coin.symbol }}</p>
          </div>
        </div>
      </td>
      <td>
        <p>${{ coin.current_price.toLocaleString() }}</p>
      </td>
      <td>
        <p :class="{
            'status-success': coin.price_change_percentage_24h > 0,
            'status-danger': coin.price_change_percentage_24h < 0,
          }">
         {{ coin.price_change_percentage_24h.toFixed(2) }}%
        </p>
      </td>
      <td>
        <p>${{ coin.market_cap.toLocaleString() }}</p>
      </td>
      <td>
        <svg
          class="sparkline"
          :viewBox="'0 0 ' + sparklineWidth + ' 50'"
          preserveAspectRatio="none"
        >
          <path
            :d="generateSmoothPath(sparklinePoints)"
            fill="none"
            :stroke="lineColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </td>
      <td><button class="btn-trade">Trade</button></td>
    </tr>
  </tbody>
</template>


<script>
export default {
  props: {
    coin: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      watchlist: [], // เก็บ id ของเหรียญที่อยู่ใน Watchlist
    };
  },
  computed: {
    sparklineWidth() {
      return 100; // ความกว้างของกราฟ
    },
    sparklinePoints() {
      const prices = this.coin.sparkline_in_7d.price;
      const max = Math.max(...prices);
      const min = Math.min(...prices);
      const scaleX = this.sparklineWidth / (prices.length - 1);
      const scaleY = 50 / (max - min);

      return prices.map((price, index) => ({
        x: index * scaleX,
        y: 50 - (price - min) * scaleY,
      }));
    },
    lineColor() {
      const priceChange = this.coin.price_change_percentage_24h;
      return priceChange > 0 ? "#00994d" : "#f04542";
    },
  },
  methods: {
    generateSmoothPath(points) {
      if (!points || points.length < 2) {
        return "";
      }
      let d = `M${points[0].x},${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        d += ` L${points[i].x},${points[i].y}`;
      }
      return d;
    },
    toggleWatchlist(coinId) {
      // เพิ่ม/ลบเหรียญจาก Watchlist
      if (this.isInWatchlist(coinId)) {
        this.watchlist = this.watchlist.filter((id) => id !== coinId);
      } else {
        this.watchlist.push(coinId);
      }
    },
    isInWatchlist(coinId) {
      return this.watchlist.includes(coinId);
    },
  },
};
</script>


<style scoped>

.watchlist-button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
  opacity: 0.7;
  transition: color 0.2s;
}
.watchlist-button.added {
  color: #ff9800; 
}
.watchlist-button:hover {
  color: #ff9800;
}
</style>

