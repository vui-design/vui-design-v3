// 将 16 进制颜色值转换为 rgba 表示方式
export function hex2rgba(value: string, opacity: number) {
  const regex = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let color = value.toLowerCase();

  // 如果是 16 进制颜色
  if (color && regex.test(color)) {
    if (color.length === 4) {
      let prefix = "#";

      for (let i = 1; i < 4; i++) {
        prefix += color.slice(i, i + 1).concat(color.slice(i, i + 1));
      }

      color = prefix;
    }

    let range = [];

    for (let i = 1; i < 7; i += 2) {
      range.push(parseInt("0x" + color.slice(i, i + 2)));
    }

    return "rgba(" + range.join(",") + "," + opacity + ")";
  }

  return color;
};

// 将 rgba 颜色值转换为 16 进制表示方式
export function rgba2hex(value: string): string {
  const values = value.replace(/rgba?\(/, "").replace(/\)/, "").replace(/[\s+]/g, "").split(",");
  const a = values[3] ? parseFloat(values[3]) : 1;
  const r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255);
  const g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255);
  const b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);

  return "#" + ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2);
};

// 
export default {
  hex2rgba,
  rgba2hex
};