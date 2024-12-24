<template>
    <div class="coin-card">
        <img :src="coin.image" :alt="coin.name" class="coin-logo" />
        <div class="coin-info">
            <p>{{ coin.name }} ({{ coin.symbol.toUpperCase() }})</p>
            <p
                :class="{ 'price-up': coin.price_change_percentage_24h > 0, 'price-down': coin.price_change_percentage_24h < 0 }">
                {{ coin.price_change_percentage_24h.toFixed(2) }}%
            </p>
            <p>Price: ${{ coin.current_price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        coin: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.coin-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-line);

    &:last-child {
        border-bottom: none;
    }
}

.coin-logo {
    width: 1.75rem;
    height: 1.75rem;
}




.price-up {
    color: var(--color-status-success)
}

.price-down {
    color: var(--color-status-danger)
}
</style>