export default class Lead {
    constructor (name, email, tag, time_spent) {
        this.event_info = {
            "event_name": "lead",
            "event_source": window.location.href,
            "event_time": this.data(),
            "time_spent": time_spent 
        };
        this.user_info = this.info(name, email);
        this.lead_tag = tag;
    }
    info(name, email) {
        function normalize(str) {
            return str.toLowerCase().trim();
        };
        let names = normalize(name).split(" ");
        let fn = "";
        let ln = "";
        if (names.length >= 2) {
            fn = names[0];
            ln = names.slice(1).join(" ");
        } else {
            fn = names[0];
        };
        let info = {
            nome: fn,
            sobrenome: ln,
            email: normalize(email)
        };
        return info;
    };
    date() {
        let t = new Date;
        let day = t.getDate();
        let month = t.getMonth() + 1;
        let year = t.getFullYear() + 1;
        let data = [day, month, year];
        let current_day = data.reverse().join("-");
        let hours = t.getHours(current_day);
        let minutes = t.getMinutes(current_day);
        if (hours < 10) {hours = '0' + hours};
        if (minutes < 10) {minutes = '0' + minutes}
        let today = data.reverse().join("-");
        let now = [hours, minutes].join(":");
        let time_now = { date: today, time: now };
        return time_now;
    };
}