import { Avatar, Button, Paper, Typography, TextField, CircularProgress } from "@mui/material";
import { blue, green, grey } from "@mui/material/colors";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";


import hook from "./hook";

export default () => {
  const { doctor, isEdit, setIsEdit, update, sendDate } = hook()
  return (
    <div className="paper-div">
      {isEdit ? (
        <div className="form-div">
          <div className="menu-add">
            <div>Информация</div>
          </div>
          <form>

            <div className="upload-button-div">
              <span className="upload-button">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="icon-button-file"
                />
                <label htmlFor="icon-button-file" style={{ cursor: "pointer" }}>
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
                  type="text" value={doctor?.first_name}
                  onChange={(event) => {
                    update("first_name", event.target.value)
                  }}
                />
              </div>

              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Фамилия
                </label>
                <input type="text" value={doctor?.last_name}
                  onChange={(event) => {
                    update("last_name", event.target.value)
                  }} />
              </div>

              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Email
                </label>
                <input type="email" value={doctor?.email}
                  onChange={(event) => {
                    update("email", event.target.value)
                  }} />
              </div>
            </div>
            <div className="inputs-add">
              <div className="phone-input">
                <div className="input-item-add">
                  <label>
                    <span style={{ color: "red" }}>* </span>Телефон
                  </label>
                  <div className="input-item-phone">
                    {/* <select>
                      <option value="" disabled selected hidden>
                        Выберите код страны
                      </option>
                      <option value={+374}>+374</option>
                      <option value={+40}>+40</option>
                      <option value={+7}>+7</option>
                      <option value={+380}>+380</option>
                    </select> */}
                    <input type="text" value={doctor?.phone_number} onChange={(event) => {
                    update("phone_number", event.target.value)
                  }}/>
                  </div>
                </div>
              </div>

              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Категории
                </label>
                <input
                  type="text" 
                  value={doctor.user_categories.map((item) => item.category.title.ru)}
                  onChange={(event) => {
                    update("user_categories", event.target.value)
                  }}
                />
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
                  value={doctor.date_of_birth}
                  onChange={(event) => {
                    update("date_of_birth", event.target.value)
                  }}
                />
              </div>

              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Пол
                </label>
                <div>
                  <input
                    type="radio"
                    className="radio"
                    value={doctor.gender_details.title.ru}
                  />
                  <label>Мужской</label>
                  <input
                    type="radio"
                    className="radio"
                    value={doctor.gender_details.title.ru}
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
                  value={doctor.doctor_details.excperience_start_year}
                  onChange={(event) => {
                    update("doctor_details.excperience_start_year", event.target.value)
                  }}
                />
              </div>
            </div>
            <div className="inputs-add">
              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Продолжительность
                  консультации
                </label>
                <input
                  type="text"
                  value={doctor.doctor_details.consultation_duration} />
              </div>

              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Продолжительность
                  постоновления
                </label>
                <input
                  type="text"
                  value={doctor.doctor_details.epicrise_duration}
                />
              </div>

              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Цена
                </label>
                <input
                  type="number"
                  value={doctor.doctor_details.price}
                />
              </div>

              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Процент
                </label>
                <input
                  type="number"
                  value={doctor.doctor_details.fee_percent}
                />
              </div>
            </div>
            <div className="inputs-add">
              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Адрес врача
                </label>
                <input
                  type="text"
                  value={doctor.address}
                />
              </div>

              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Город
                </label>
                <input
                  type="text"
                  value={doctor.city}
                />
              </div>

              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Zip код
                </label>
                <input
                  type="text"
                  value={doctor.zip_code}
                />
              </div>
            </div>
            <div className="inputs-add">
              <div className="input-item-add">
                <label>О себе</label>
                <textarea
                  placeholder="Insert text here..."
                  value={doctor.about}
                />
              </div>

              <div className="input-item-add">
                <label>
                  <span style={{ color: "red" }}>* </span>Образование
                </label>
                <textarea
                  placeholder="Insert text here..."
                  value={doctor.doctor_details.education}
                />
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
                  value={doctor.doctor_details.experience} />
              </div>

              <div className="input-item-add">
                <label>Дополнительно</label>
                <textarea
                  placeholder="Insert text here..."
                  value={doctor.doctor_details.extra_info}
                />
              </div>
            </div>
          </form>
          <Button
            size="small"
            variant="outlined"
            sx={{ bgcolor: blue[300], borderColor: blue[300], color: 'white' }}
            onClick={() => {
              sendDate()
            }}>Save</Button>
        </div>)
        : (
          <div>
            <Avatar
              alt={`${doctor?.first_name}`}
              src={`${doctor?.profile_image}`}
              sx={{ width: 110, height: 110 }}
            />
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
              {doctor?.first_name} {doctor?.last_name}
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
              Date of birth {doctor?.date_of_birth}
            </Typography>
            <Typography sx={{ display: "flex", justifyContent: "space-around", pt: 2, pb: 2 }}>
              <Typography sx={{ fontWeight: "bold", color: green[700] }}>
                Price ${doctor?.price}
              </Typography>
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Country - {doctor.country_code?.country_name?.en}
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Category - {doctor?.user_categories ? doctor?.user_categories.map((item) => item.category?.title?.en + ", ") : <CircularProgress />}
            </Typography>
            <Button
              size="small"
              variant="outlined"
              sx={{ bgcolor: blue[300], borderColor: blue[300], color: 'white', mt:2 }}
              onClick={() => {
                setIsEdit(!isEdit)
              }}>Edit</Button>
          </div>
        )
      }
    </div>
  )
}