import Conf from 'conf';
const schema = {
    uri: {
        type: 'string',
    },
};
const config = new Conf({ projectName: 'fm-cli', schema });
export const setConfig = (key, value) => {
    return config.set(key, value);
};
export const getConfig = (key) => {
    return config.get(key);
};
export const hasConfig = (key) => {
    return config.has(key);
};
export const resetConfig = () => config.clear();
//# sourceMappingURL=config.js.map