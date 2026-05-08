// auth-config.js
const AUTH_CONFIG = {
    director: "632dfe8c4915a8b1f12ac666f531b0f9411f268ea4614579f6830ab773f30ba3",
    
    isValid: function(username, password) {
        const input = CryptoJS.SHA256(username.trim() + "|" + password.trim()).toString();
        return input === this.director;
    }
};