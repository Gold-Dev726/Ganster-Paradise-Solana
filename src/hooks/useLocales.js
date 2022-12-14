import { useTranslation } from "react-i18next";
// material
import { enUS, deDE, frFR, esES, zhCN, ruRU, arEG } from "@mui/material/locale";

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: "English",
    value: "en",
    systemValue: enUS,
    icon: "/icons/ic_flag_en.svg"
  },
  {
    label: "Spanish",
    value: "es",
    systemValue: esES,
    icon: "/icons/ic_flag_en.svg"
  },
  {
    label: "Chinese",
    value: "zh",
    systemValue: zhCN,
    icon: "/icons/ic_flag_en.svg"
  },
  {
    label: "Russian",
    value: "ru",
    systemValue: ruRU,
    icon: "/icons/ic_flag_en.svg"
  },
  {
    label: "Arabic",
    value: "ar",
    systemValue: arEG,
    icon: "/icons/ic_flag_en.svg"
  },
  {
    label: "German",
    value: "de",
    systemValue: deDE,

    icon: "/icons/ic_flag_de.svg"
  },
  {
    label: "French",
    value: "fr",
    systemValue: frFR,
    icon: "/icons/ic_flag_fr.svg"
  }
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem("i18nextLng");
  const currentLang =
    LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS
  };
}
