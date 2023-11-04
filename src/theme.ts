export const theme = {
  button: {
    color: {
      info: "bg-sky-700 text-white hover:bg-sky-600",
      success:
        "text-white bg-green-500 border border-transparent enabled:hover:bg-green-400 focus:ring-4 focus:ring-green-300 dark:bg-green-500 dark:enabled:hover:bg-green-400 dark:focus:ring-green-500",
      failure:
        "text-white bg-red-500 border border-transparent enabled:hover:bg-red-600 focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:enabled:hover:bg-red-600 dark:focus:ring-red-900",
    },
  },
  table: {
    head: {
      base: "text-sky-700 px-4 py-4 rounded-tl-lg rounded-tr-lg",
      cell: {
        base:
          "bg-sky-100 px-4 py-4 after:rounded-none before:rounded-none first:rounded-tl-lg last:rounded-tr-lg dark:bg-slate-800 dark:text-slate-400",
      },
    },
    row: {
      base:
        "text-slate-600 px-4 py-4 bg-white last:rounded-bl-lg last:rounded-br-lg dark:bg-slate-800 dark:text-slate-400",
    },
  },
  card: {
    root: {
      base:
        "bg-white rounded-lg shadow-lg dark:bg-slate-800 text-slate-600 dark:text-slate-200",
    },
  },
  tab: {
    tablist: {
      tabitem: {
        styles: {
          default: {
            active: {
              on:
                "bg-gray-100 text-cyan-600 dark:bg-gray-700 dark:text-cyan-500",
            },
          },
        },
      },
    },
  },
};
