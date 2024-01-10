import { contractSchema, employeeSchema } from "../../schema/form-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.scss";
export interface FormData {
  employeeDTO: {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    mobile: string;
    address: string;
  };
  contractDTO: {
    contractType: string;
    startDate: string;
    endDate: string;
    ongoing: boolean;
    fullTime: string;
    hours: number;
  };
}
interface FormProps {
  defaultValues: FormData;
  onSubmit: SubmitHandler<FormData>;
}
const Form: React.FC<FormProps> = ({ defaultValues, onSubmit }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(
      z.object({
        employeeDTO: employeeSchema,
        contractDTO: contractSchema,
      })
    ),
    defaultValues,
  });
  const formSubmit: SubmitHandler<FormData> = (data: FormData) => {
    onSubmit(data);
  };
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("contractDTO.ongoing", e.target.checked);
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)} className={styles.container}>
      <h2>Personal Information</h2>
      <div>
        <label>
          First Name
          <div>
            <input
              {...register("employeeDTO.firstName")}
              className={styles.input__personal}
            />{" "}
            {errors?.employeeDTO?.firstName && (
              <span>{errors.employeeDTO.firstName.message}</span>
            )}
          </div>
        </label>
        <label>
          Middle Name (if applicable)
          <div>
            <input
              {...register("employeeDTO.middleName")}
              className={styles.input__personal}
            />
            {errors?.employeeDTO?.middleName && (
              <span>{errors.employeeDTO.middleName.message}</span>
            )}
          </div>
        </label>
        <label>
          Last Name
          <div>
            <input
              {...register("employeeDTO.lastName")}
              className={styles.input__personal}
            />
            {errors?.employeeDTO?.lastName && (
              <span>{errors.employeeDTO.lastName.message}</span>
            )}
          </div>
        </label>
      </div>

      <h2>Contact details</h2>
      <label>
        Email
        <div>
          <input
            {...register("employeeDTO.email")}
            className={styles.input__contact__email}
          />
          {errors?.employeeDTO?.email && (
            <span>{errors.employeeDTO.email.message}</span>
          )}
        </div>
      </label>
      <label>
        Mobile
        <p className={styles.subtext}>Must be an Australian number</p>
        <div>
          <input
            {...register("employeeDTO.mobile")}
            className={styles.input__contact__mobile}
          />
          {errors?.employeeDTO?.mobile && (
            <span>{errors.employeeDTO.mobile.message}</span>
          )}
        </div>
      </label>
      <label>
        Residential Address:
        <div>
          <input
            {...register("employeeDTO.address")}
            className={styles.input__contact__address}
          />
          {errors?.employeeDTO?.address && (
            <span>{errors.employeeDTO.address.message}</span>
          )}
        </div>
      </label>
      <h2>Employee Status</h2>
      <div>
        <label>
          What is contract type?
          <div className={styles.input__status__type}>
            <label>
              <input
                {...register("contractDTO.contractType")}
                type="radio"
                value="true"
                defaultChecked={
                  defaultValues &&
                  defaultValues.contractDTO.contractType === "true"
                }
              />
              Permanent
            </label>
            <label>
              <input
                {...register("contractDTO.contractType")}
                type="radio"
                value="false"
                defaultChecked={
                  defaultValues &&
                  defaultValues.contractDTO.contractType === "false"
                }
              />
              Contract
            </label>
          </div>
          {errors?.contractDTO?.contractType && (
            <span>{errors?.contractDTO?.contractType.message}</span>
          )}
        </label>
      </div>

      <label>
        Start Date:
        <div>
          <input {...register("contractDTO.startDate")} type="date" />
          {errors?.contractDTO?.startDate && (
            <span>{errors?.contractDTO?.startDate.message}</span>
          )}
        </div>
      </label>
      <label>
        Finish Date:
        <div>
          <input {...register("contractDTO.endDate")} type="date" />
          {errors?.contractDTO?.endDate && (
            <span>{errors?.contractDTO?.endDate.message}</span>
          )}
        </div>
      </label>
      <label>
        <div>
          <label className={styles.input__status__ongoing}>
            <input
              {...register("contractDTO.ongoing")}
              type="checkbox"
              defaultChecked={
                defaultValues && defaultValues.contractDTO.ongoing
              }
              onChange={handleCheckbox}
            />
            Ongoing
          </label>
        </div>
        {errors?.contractDTO?.ongoing && (
          <span>{errors?.contractDTO?.ongoing.message}</span>
        )}
      </label>
      <label>
        Is this on a full-time or part-time basis?
        <div className={styles.input__status__fullTime}>
          <label>
            <input
              {...register("contractDTO.fullTime")}
              type="radio"
              value="true"
              defaultChecked={
                defaultValues && defaultValues.contractDTO.fullTime === "true"
              }
            />
            Full-time
          </label>
          <label>
            <input
              {...register("contractDTO.fullTime")}
              type="radio"
              value="false"
              defaultChecked={
                defaultValues && defaultValues.contractDTO.fullTime === "true"
              }
            />
            Part-time
          </label>
        </div>
        {errors?.contractDTO?.fullTime && (
          <span>{errors?.contractDTO?.fullTime.message}</span>
        )}
      </label>
      <label>
        Hours per week
        <div>
          <input
            {...register("contractDTO.hours", {
              setValueAs: (value) => parseFloat(value) || 0,
            })}
            type="number"
            className={styles.input__status__hours}
          />
          {errors?.contractDTO?.hours && (
            <span>{errors?.contractDTO?.hours.message}</span>
          )}
        </div>
      </label>
      <div className={styles.btn__wrapper}>
        <button type="submit" className={styles.btn__save}>
          Save
        </button>
        <button
          type="button"
          onClick={() => navigate(`/`)}
          className={styles.btn}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
