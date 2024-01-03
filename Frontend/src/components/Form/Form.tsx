import { contractSchema, employeeSchema } from "../../schema/form-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.scss";
import { employeeUtils } from "../../services/employee-utils";
interface FormData {
  employeeDTO: {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    mobile: string;
    address: string;
  };
  contractDTO: {
    contractType: boolean;
    startDate: string;
    endDate: string;
    ongoing: boolean;
    fullTime: boolean;
    hours: string;
  };
}
const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(
      z.object({
        employeeDTO: employeeSchema,
        contractDTO: contractSchema,
      })
    ),
  });
  const formSubmit: SubmitHandler<FormData> = (data) => {
    employeeUtils.createEmployee(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={styles.container}>
      <label>
        First Name
        <input {...register("employeeDTO.firstName")} />
        {errors?.employeeDTO?.firstName && (
          <p>{errors.employeeDTO.firstName.message}</p>
        )}
      </label>

      <label>
        Middle Name (if applicable)
        <input {...register("employeeDTO.middleName")} />
        {errors?.employeeDTO?.middleName && (
          <p>{errors.employeeDTO.middleName.message}</p>
        )}
      </label>

      <label>
        Last Name
        <input {...register("employeeDTO.lastName")} />
        {errors?.employeeDTO?.lastName && (
          <p>{errors.employeeDTO.lastName.message}</p>
        )}
      </label>
      <h3>Contact details</h3>
      <label>
        Email
        <input {...register("employeeDTO.email")} />
        {errors?.employeeDTO?.email && (
          <p>{errors.employeeDTO.email.message}</p>
        )}
      </label>

      <label>
        Mobile
        <h5>Must be an Australian number</h5>
        <input {...register("employeeDTO.mobile")} />
        {errors?.employeeDTO?.mobile && (
          <p>{errors.employeeDTO.mobile.message}</p>
        )}
      </label>

      <label>
        Address:
        <input {...register("employeeDTO.address")} />
        {errors?.employeeDTO?.address && (
          <p>{errors.employeeDTO.address.message}</p>
        )}
      </label>
      <label>
        Contract Type:
        <input {...register("contractDTO.contractType")} type="checkbox" />
        {errors?.contractDTO?.contractType && (
          <p>{errors?.contractDTO?.contractType.message}</p>
        )}
      </label>
      <label>
        Start Date:
        <input {...register("contractDTO.startDate")} type="date" />
        {errors?.contractDTO?.startDate && (
          <p>{errors?.contractDTO?.startDate.message}</p>
        )}
      </label>

      <label>
        End Date:
        <input {...register("contractDTO.endDate")} type="date" />
        {errors?.contractDTO?.endDate && (
          <p>{errors?.contractDTO?.endDate.message}</p>
        )}
      </label>

      <label>
        Ongoing:
        <input {...register("contractDTO.ongoing")} type="checkbox" />
        {errors?.contractDTO?.ongoing && (
          <p>{errors?.contractDTO?.ongoing.message}</p>
        )}
      </label>

      <label>
        Full Time:
        <input {...register("contractDTO.fullTime")} type="checkbox" />
        {errors?.contractDTO?.fullTime && (
          <p>{errors?.contractDTO?.fullTime.message}</p>
        )}
      </label>

      <label>
        Hours:
        <input {...register("contractDTO.hours")} type="number" />
        {errors?.contractDTO?.hours && (
          <p>{errors?.contractDTO?.hours.message}</p>
        )}
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={() => navigate(`/`)}>
        Cancel
      </button>
    </form>
  );
};

export default Form;
