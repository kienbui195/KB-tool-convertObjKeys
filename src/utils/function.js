export const removeQuotesFromKeys = (jsonString) => {
  const obj = JSON.parse(jsonString);
  const newObj = {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = key.replace(/"/g, ""); // Xóa tất cả dấu ngoặc kép từ key
      newObj[newKey] = obj[key];
    }
  }

  return JSON.stringify(newObj, null, 2);
};

export const camelToSnake = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const snakeToCamel = (str) => str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());

export const convertKeys = (obj, isConvertToCamelCase = true) => {
  const convertObjectKeys = (obj) => {
    if (typeof obj !== "object" || obj === null) {
      return obj; // Nếu không phải là đối tượng, giữ nguyên giá trị
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => convertObjectKeys(item)); // Nếu là mảng, duyệt và chuyển đổi các phần tử
    }

    const newObj = {};
    for (let key in obj) {
      const newKey = !isConvertToCamelCase ? camelToSnake(key) : snakeToCamel(key);
      newObj[newKey] = convertObjectKeys(obj[key]); // Đệ quy chuyển đổi các giá trị bên trong đối tượng
    }
    return newObj;
  };

  return convertObjectKeys(obj);
};
