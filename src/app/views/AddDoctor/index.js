import { useForm } from "react-hook-form";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import api from "../../services/api"
import { useDispatch } from "react-redux";
import hook from "./hook";

export default () => {
    const {match, onSubmit} = hook()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <div className="form-div">
            <div className="menu-add">
                <div>Информация</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="upload-button-div">
                    <span className="upload-button">
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="icon-button-file"
                            onChange={(res)=>{
                                const data = new  FormData();
                                data.append("file_url",res.target.files[0]);
                                api.post('https://api-tm.annaniks.com/files/files/',data).then((response)=>{
                                }).catch((error)=>{
                                })
                            }}
                        />
                        <label htmlFor="icon-button-file" style={{cursor:"pointer"}}>
                            <span>
                                <FileUploadOutlinedIcon />
                            </span>
                            <span>Аватар</span>
                        </label>
                    </span>
                </div>

                <div className="inputs-add">
                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Имя
                        </label>
                        <input
                            type="text"
                            {...register("first_name", { required: true })}
                        />
                        {errors.first_name?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>

                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Фамилия
                        </label>
                        <input type="text" {...register("last_name", { required: true })} />
                        {errors.last_name?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>

                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Email
                        </label>
                        <input type="email" {...register("email", { required: true })} />
                        {errors.email?.type === "required" && <i>Это обязательное поле</i>}
                    </div>
                </div>
                <div className="inputs-add">
                    <div className="phone-input">
                        <div className="input-item-add">
                            <label>
                                <span style={{ color: "red" }}>* </span>Телефон
                            </label>
                            <div className="input-item-phone">
                                <select>
                                    <option value="" disabled selected hidden>
                                        Выберите код страны
                                    </option>
                                    <option value={+374}>+374</option>
                                    <option value={+40}>+40</option>
                                    <option value={+7}>+7</option>
                                    <option value={+380}>+380</option>
                                </select>
                                <input
                                    type="number"
                                    {...register("phone_number", { required: true })}
                                />
                            </div>
                            {errors.phone_number?.type === "required" && (
                                <i>Это обязательное поле</i>
                            )}
                        </div>
                    </div>

                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Категории
                        </label>
                        <input
                            type="text"
                            {...register("user_categories[0].category.title.ru", {
                                required: true
                            })}
                        />
                        {errors.category?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>
                </div>

                <div className="inputs-add">
                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Дата рождения
                        </label>
                        <input
                            type="date"
                            placeholder="Выберите дату"
                            {...register("date_of_birth", { required: true })}
                        />
                        {errors.date_of_birth?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>

                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Пол
                        </label>
                        <div>
                            <input
                                type="radio"
                                value="Мужской"
                                className="radio"
                                {...register("gender_details.title.ru")}
                            />
                            <label>Мужской</label>
                            <input
                                type="radio"
                                value="Женский"
                                className="radio"
                                {...register("gender_details.title.ru")}
                            />
                            <label>Женский</label>
                        </div>
                    </div>

                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Стаж
                        </label>
                        <input
                            placeholder="Выберите год"
                            type="month"
                            {...register("doctor_details.excperience_start_year", {
                                required: true
                            })}
                        />
                        {errors.excperience_start_year?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>
                </div>

                <div className="inputs-add">
                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Продолжительность
                            консультации
                        </label>
                        <input
                            type="number"
                            {...register("doctor_details.consultation_duration", {
                                required: true
                            })}
                        />
                        {errors.consultation_duration?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>

                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Продолжительность
                            постоновления
                        </label>
                        <input
                            type="number"
                            {...register("doctor_details.epicrise_duration", {
                                required: true
                            })}
                        />
                        {errors.epicrise_duration?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>

                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Цена
                        </label>
                        <input
                            type="number"
                            {...register("doctor_details.price", {
                                required: true
                            })}
                        />
                        {errors.price?.type === "required" && <i>Это обязательное поле</i>}
                    </div>

                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Процент
                        </label>
                        <input
                            type="number"
                            {...register("doctor_details.fee_percent", {
                                required: true
                            })}
                        />
                        {errors.fee_percent?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>
                </div>
                <div className="inputs-add">
                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Адрес врача
                        </label>
                        <input
                            type="text"
                            {...register("address", {
                                required: true
                            })}
                        />
                        {errors.address?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>

                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Город
                        </label>
                        <input
                            type="text"
                            {...register("city", {
                                required: true
                            })}
                        />
                        {errors.city?.type === "required" && <i>Это обязательное поле</i>}
                    </div>

                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Zip код
                        </label>
                        <input
                            type="text"
                            {...register("zip_code", {
                                required: true
                            })}
                        />
                        {errors.zip_code?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>
                </div>

                <div className="inputs-add">
                    <div className="input-item-add">
                        <label>О себе</label>
                        <textarea
                            placeholder="Insert text here..."
                            {...register("about")}
                        />
                    </div>

                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>Образование
                        </label>
                        <textarea
                            placeholder="Insert text here..."
                            {...register("doctor_details.education", {
                                required: true
                            })}
                        />
                        {errors.education?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>
                </div>

                <div className="inputs-add">
                    <div className="input-item-add">
                        <label>
                            <span style={{ color: "red" }}>* </span>
                            Специализируется на лечении
                        </label>
                        <textarea
                            placeholder="Insert text here..."
                            {...register("doctor_details.excperience", { required: true })}
                        />
                        {errors.excperience?.type === "required" && (
                            <i>Это обязательное поле</i>
                        )}
                    </div>

                    <div className="input-item-add">
                        <label>Дополнительно</label>
                        <textarea
                            placeholder="Insert text here..."
                            {...register("doctor_details.extra_info", { required: true })}
                        />
                    </div>
                </div>
                <Button
                    type="submit"
                    size="small"
                    variant="outlined"
                    sx={{ bgcolor: blue[300], borderColor: blue[300], color: 'white' }}>
                    Добавить
                </Button>
            </form>
        </div>
    );
};
