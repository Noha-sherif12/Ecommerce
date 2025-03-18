import { Heading } from "@components/common";
import { useAppSelector } from "@store/hooks";
import { useTranslation } from "react-i18next";


const Account = () => {

  const accountInfo = useAppSelector((state) => state.auth.user);
  const {t } = useTranslation();
  return (
    <>
      <Heading title={t("account.title")}/>
      <ul>
        <li>{t("account.firstName")}: {accountInfo?.firstName}</li>
        <li>{t("account.lastName")}: {accountInfo?.lastName}</li>
        <li>{t("account.email")}: {accountInfo?.email}</li>
      </ul>
    </>
  )
}

export default Account;
