import React, { useEffect, useState } from "react";
import * as apiDH from "./../../../api/dat_hang";
import "./index.scss";
import momo from "./../../../assets/image/momo.jfif";
function ThanhToan(props) {
  const [data, setData] = useState(false);
  const url_string = window.location.href;
  const url = new URL(url_string);
  const orderId = url.searchParams.get("orderId");
  const resultCode = url.searchParams.get("resultCode");
  const updateDonHang = async () => {
    await apiDH.updateThanhToan({ id: orderId, thanh_toan: 1 }).then((res) => {
      if (res.status === 200) {
        setData(true);
      }
    });
  };
  useEffect(() => {
    if (parseInt(resultCode) === 0) {
      updateDonHang();
    } else {
      setData(false);
    }
  }, []);
  console.log(data);
  return (
    <div className="HuongDanMuaHang">
      <div className="container">
        <div className="title-huongdans text-center">Thanh toán qua MoMo</div>
        <div className="row">
          <div>
            <div className="momo">
              <img src={momo} alt=""></img>
            </div>
            <div className="success">Success</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanhToan;
