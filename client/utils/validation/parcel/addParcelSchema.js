import * as Yup from 'yup';

const addParcelSchema = Yup.object().shape({
  name: Yup.string().required(' هذه الخانة مطلوبة'),
  phoneNumber: Yup.string()
    .min(9, 'الرقم يجب ان يتكون من 9 أرقام')
    .max(9, 'الرقم يجب ان يتكون من 9 أرقام')
    .matches(/^[0-9]*$/, 'الرقم يجب ان يتكون من 9 أرقام')
    .required(' هذه الخانة مطلوبة'),
  price: Yup.string()
    .matches(/^[0-9]*$/, 'يجب ادخال رقم')
    .required(' هذه الخانة مطلوبة'),
});

export default addParcelSchema;
