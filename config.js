const test = {
    performance: {
        test: true
    }
};

module.exports = () => ({
    common: {
        performance: {
            prometheus: true
        },
        utPortConsole: {
            server: {
                address: '0.0.0.0',
                port: 30011
            },
            jwt: {
                key: 'with a value in an extension methods or authentication function will be considered'
            },
            cookie: {
                isSecure: false,
                isHttpOnly: false,
                clearInvalid: false,
                strictHeader: false
            }
        }
    },
    // environments
    dev: {
        utPortConsole: {
            disableXsrf: {
                ws: true
            },
            disablePermissionVerify: {
                ws: true
            }
        }
    },
    test,
    jenkins: test,
    uat: {
    },
    // test types
    validation: ({joi}) => joi.object({
        performance: joi.object(),
        utPortConsole: joi.object()
    }).unknown()
});
