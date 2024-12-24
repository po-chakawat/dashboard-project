<template>
    <div class="highlight-section">
      <div class="highlight-category rounded-3" v-for="(coins, category) in categorizedCoins" :key="category">
        <h5>{{ category }}</h5>
        <HighlightCard v-for="coin in coins" :key="coin.id" :coin="coin" />
      </div>
    </div>
  </template>
  
  <script>
  import { getCryptocurrencyData } from '@/services/cryptoService';
  import HighlightCard from '@/components/HighlightCard.vue';
  
  export default {
    components: {
        HighlightCard,
    },
    data() {
      return {
        allCoins: [],
        categorizedCoins: {},
      };
    },
    async created() {
      try {
        const coins = await getCryptocurrencyData();
        this.allCoins = coins;
        this.categorizeCoins();
      } catch (error) {
        console.error('Error fetching coins:', error);
      }
    },
    methods: {
      categorizeCoins() {
        // Top Gainers
        const topGainers = [...this.allCoins]
          .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
          .slice(0, 3);
  
        // Top Losers
        const topLosers = [...this.allCoins]
          .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
          .slice(0, 3);
  
        // Most Traded Coins
        const mostTraded = [...this.allCoins]
          .sort((a, b) => b.total_volume - a.total_volume)
          .slice(0, 3);
  
        this.categorizedCoins = {
          'Top Gainers': topGainers,
          'Top Losers': topLosers,
          'Most Traded Coins': mostTraded,
        };
      },
    },
  };
  </script>
  
  <style>
  .highlight-section {
    display: flex;
    justify-content: space-between;
    gap: 20px;

  }
  .highlight-category {
    flex: 1;
    background-color: var(--bg-card-element);
    padding: 1rem 1.25rem;
    box-shadow: 0 4px 24px 0 var(--global-shadow-1), 
                0 1px 2px 0 var(--global-shadow-2);
  }
  .highlight-category h3 {
    margin-bottom: 15px;
    font-size: 18px;
  }
  </style>
  