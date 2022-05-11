export const defaultOptions = {
    DEBUG: false,
    BASE_CLASS: "orbit",
    BASE_RADIUS: 5,
    BASE_AMOUNT: 6,
    UPDATE_INTERVAL: 1000,
    USE_FETCH: true,
    FETCH_HREF: "/api",
    FETCH_METHOD: "get",
    ON_CLICK: "",
    CLASS_MAP: {
        cpu: {
            NORMAL: "cpu-normal",
            WARN: "cpu-warning",
            CRITICAL: "cpu-critical",
        },
        memory: {
            NORMAL: "mem-normal",
            WARN: "mem-warning",
            CRITICAL: "mem-critical",
        },
        disk: {
            NORMAL: "disk-normal",
            WARN: "disk-warning",
            CRITICAL: "disk-critical",
        },
        server: {
            NORMAL: "server-normal",
            ABNORMAL: "server-abnormal",
        },
    },
};

export const importOptions = (options) => {
    options.debug == true && console.log("Importing Options..");
    gOrbit.options.DEBUG = options.debug;
    gOrbit.options.BASE_CLASS = options.base_class;
    gOrbit.options.BASE_RADIUS = options.base_radius;
    gOrbit.options.BASE_AMOUNT = options.base_amount;
    gOrbit.options.UPDATE_INTERVAL = options.update_interval;
    gOrbit.options.USE_FETCH = options.use_fetch;
    gOrbit.options.FETCH_HREF = options.fetch_href;
    gOrbit.options.FETCH_METHOD = options.fetch_method;
    gOrbit.options.ON_CLICK = options.on_click;
    gOrbit.options.CLASS_MAP = options.class_map;
    gOrbit.options.BINDING_SPECIFY = options.binding_specify;
    options.debug && console.log(">> Importing Complete");
};
