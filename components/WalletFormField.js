import WalletTextInput from "./WalletTextInput";
import { useFormikContext } from "formik";

const WalletFormField = ({ name, ...others }) => {
  const { errors, setFieldTouched, setFieldValue, values, touched } =
    useFormikContext();
  return (
    <WalletTextInput
      //   onBlur={() => setFieldTouched(name)}
      onChangeText={(text) => setFieldValue(name, text)}
      value={values[name]}
      {...others}
    />
  );
};

export default WalletFormField;
