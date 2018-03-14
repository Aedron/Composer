
interface Config {

}

const defaultConfig = {

};

class Editor {
    static create = (el: HTMLElement, config?: Config) => {
        return new Editor(el, config);
    };

    config: Config;

    constructor(el: HTMLElement, config: Config) {

    }

}