let myButton = document.getElementById('button');

function check() {
  let notice = document.getElementById("notice");
  notice.innerHTML = "";
  
  let company = document.getElementById("company").value;
  let booth = document.getElementById("size").value;
  let chair = document.getElementById("chair").value;
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  if (company == "") {
    notice.innerHTML += "ต้องใส่ ชื่อบริษัท<br>";
  }

  if (booth == "") {
    notice.innerHTML += "ต้องเลือก ขนาดบูธ<br>";
  }

  if (chair != "" && (Number(chair) > 10 || Number(chair) < 1)) {
    notice.innerHTML += "จำนวนเก้าอี้ต้องมีค่าระหว่าง 1-10<br>";
  }

  if (name == "") {
    notice.innerHTML += "ต้องใส่ ชื่อผู้มาติดต่อ<br>";
  }

  if (phone == "") {
    notice.innerHTML += "ต้องใส่ เบอร์โทรศัพท์ผู้ติดต่อ<br>";
  }

  if (notice.innerHTML == "") {
    document.getElementById("myForm").reset();
    alert("ลงทะเบียนสำเร็จ");
  }

}

myButton.addEventListener("click",check);