module.exports = () => ({console}) => {
    return {
        performance: !console && (() => (...params) => class performance extends require('ut-port-performance')(...params) {}),
        console: () => (...params) => class utPortConsole extends require('ut-port-console')(...params) {}
    };
};
