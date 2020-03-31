export default class Team {
    constructor(p_name, p_flag, p_color = "#FFFFFF", p_victories = 0) {
        this.name = p_name;
        this.flag = p_flag;
        this.color = p_color;
        this.victories = p_victories;
    }

    get_image() {
        return `${this.flag}.png`;
    }
}