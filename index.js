module.exports = () => ({console}) => {
    return {
        config: require('./config'),
        performance: !console && (() => (...params) => class performance extends require('ut-port-performance')(...params) {}),
        console: () => (...params) => class utPortConsole extends require('ut-port-console')(...params) {}
    };
};
