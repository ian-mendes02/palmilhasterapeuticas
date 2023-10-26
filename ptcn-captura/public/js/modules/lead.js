export default class Lead {
    constructor(name, email, tag) {
    this.user_info = this.info(name, email)
    this.origem = window.location.href;
    this.data = this.date();
    this.lead_tag = tag
    }
    info(name, email) {
        function normalize(str) {
            return str.toLowerCase().trim()
        };
        let names = normalize(name).split(" ");
        let fn = "";
        let ln = "";
        if (names.length >= 2) {
            fn = names[0];
            ln = names.slice(1).join(" ")
        } else {
            fn = names[0] 
        }
        let info = {
            nome: fn,
            sobrenome: ln,
            email: normalize(email)
        }
        return info
    }
    date() {
        let t = new Date;
        let day = t.getDate(); 
        let month = t.getMonth() + 1;
        let year = t.getFullYear() + 1;
        let data = [day, month, year];
        let current_day = data.reverse().join("-");
        let hour = t.getHours(current_day);
        let minutes = t.getMinutes(current_day);
        let today = data.reverse().join("-");
        let now = [hour, minutes].join(":");
        let time_now = {data: today, horario: now}
        return time_now;
    }
}