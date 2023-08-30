const DATE_UNIT = ["년", "월", "일"];

const dateFormatting = (created_at: string) => {
    return created_at
        .slice(0, 9)
        .split("-")
        .map((date, idx) => date + DATE_UNIT[idx])
        .join("");
};
export default dateFormatting;
