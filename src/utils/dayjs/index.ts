import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(localeData);

dayjs.tz.setDefault("GMT");

export default dayjs;
