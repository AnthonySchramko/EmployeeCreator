import { contractSchema, employeeSchema } from "../../schema/form-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.scss";

export interface FormProps {
  formSubmit: (e: any) => any;
}
interface FormData {
  employee: {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    mobile: string;
    address: string;
  };
  contract: {
    startDate: string;
    endDate: string;
    ongoing: boolean;
    fullTime: boolean;
    hours: string;
  };
}
const Form: React.FC<FormProps> = ({ formSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(
      z.object({
        employee: employeeSchema,
        contract: contractSchema,
      })
    ),
  });
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit(formSubmit)} className={styles.container}>
      <label>
        First Name
        <input {...register("employee.firstName")} />
        {errors?.employee?.firstName && (
          <p>{errors.employee.firstName.message}</p>
        )}
      </label>

      <label>
        Middle Name (if applicable)
        <input {...register("employee.middleName")} />
        {errors?.employee?.middleName && (
          <p>{errors.employee.middleName.message}</p>
        )}
      </label>

      <label>
        Last Name
        <input {...register("employee.lastName")} />
        {errors?.employee?.lastName && (
          <p>{errors.employee.lastName.message}</p>
        )}
      </label>
      <h3>Contact details</h3>
      <label>
        Email
        <input {...register("employee.email")} />
        {errors?.employee?.email && <p>{errors.employee.email.message}</p>}
      </label>

      <label>
        Mobile
        <h5>Must be an Australian number</h5>
        <input {...register("employee.mobile")} />
        {errors?.employee?.mobile && <p>{errors.employee.mobile.message}</p>}
      </label>

      <label>
        Address:
        <input {...register("employee.address")} />
        {errors?.employee?.address && <p>{errors.employee.address.message}</p>}
      </label>
      <label>
        Ongoing:
        <input {...register("contract.ongoing")} type="checkbox" />
      </label>
      <label>
        Start Date:
        <input {...register("contract.startDate")} type="date" />
        {errors?.contract?.startDate && (
          <p>{errors?.contract?.startDate.message}</p>
        )}
      </label>

      <label>
        End Date:
        <input {...register("contract.endDate")} type="date" />
        {errors?.contract?.endDate && (
          <p>{errors?.contract?.endDate.message}</p>
        )}
      </label>

      <label>
        Ongoing:
        <input {...register("contract.ongoing")} type="checkbox" />
      </label>

      <label>
        Full Time:
        <input {...register("contract.fullTime")} type="checkbox" />
      </label>

      <label>
        Hours:
        <input {...register("contract.hours")} type="number" />
        {errors?.contract?.hours && <p>{errors?.contract?.hours.message}</p>}
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={() => navigate(`/`)}>
        Cancel
      </button>
    </form>
  );
};

export default Form;
