function colour_mix(rgb_colour1, rgb_colour2) {
    const validColors = ["red", "green", "blue"];
    if (!validColors.includes(rgb_colour1) || !validColors.includes(rgb_colour2)) {
        return "Error";
    }

    if (rgb_colour1 === rgb_colour2) {
        return rgb_colour1;
    }

    const mixSet = new Set([rgb_colour1, rgb_colour2]);

    if (mixSet.has("red") && mixSet.has("blue")) return "fuchsia";
    if (mixSet.has("red") && mixSet.has("green")) return "yellow";
    if (mixSet.has("green") && mixSet.has("blue")) return "aqua";

    return "Error";
}

function largest_product(val1, val2, val3) {
    const nums = [val1, val2, val3].sort((a, b) => b - a);
    return nums[0] * nums[1];
}

function day_of_the_week(day_num) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (day_num >= 1 && day_num <= 7) {
        return days[day_num - 1];
    }
    return "Error";
}

function pay_raise(status, years, salary) {
    let raise = 0.02;
    if (status === 'F') {
        if (years >= 10) raise = 0.05;
        else if (years < 4) raise = 0.015;
    } else if (status === 'P') {
        if (years > 10) raise = 0.03;
        else if (years < 4) raise = 0.01;
    }
    return +(salary * (1 + raise)).toFixed(2);
}

function is_leap(year) {
    if (year % 4 !== 0) return false;
    if (year % 100 === 0 && year % 400 !== 0) return false;
    return true;
}

export {colour_mix, largest_product, day_of_the_week, pay_raise, is_leap};