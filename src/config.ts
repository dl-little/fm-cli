import Conf from 'conf';

const schema = {
  uri: {
    type: 'string',
  },
};

const config = new Conf({ projectName: 'fm-cli', schema });

export const setConfig = (key: string, value: unknown) => {
  return config.set(key, value);
};

export const getConfig = (key: string) => {
  return config.get(key);
};

export const hasConfig = (key: string) => {
  return config.has(key);
};

export const resetConfig = () => config.clear();
