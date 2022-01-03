module.exports = {
    format_balance: (bal, amount) => {
      if (amount !== 1) {
        return `$${bal}`;
      }
  
      return bal;
    }
  };