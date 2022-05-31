let namee = document.getElementById('name');
let address = document.getElementById('address');
let telephone = document.getElementById('telephone');
let chooseTour = document.getElementById('choose-tour');
let vhcplane = document.getElementById('plane');
let vhccar = document.getElementById('car');
let quantityAdult = document.querySelector('.quantity-adult');
let quantityChild = document.querySelector('.quantity-child');
let notice = document.querySelector('#notice');

let btnAccept = document.getElementById('btn-accept');
let btnReset = document.getElementById('btn-reset');

btnAccept.addEventListener('click', function(e){
    e.preventDefault();
    if(namee.value=="" || address.value=="" || telephone.value=="" || chooseTour.value==0 || (vhccar.checked==false&&vhcplane.checked==false) || quantityAdult.value=="" || quantityChild.value=="")
        alert("Vui lòng nhập đủ thông tin!");
    else{
    var checkName = /\d/;
    if(checkName.test(namee.value))
        notice.textContent = "Tên không được có kí tự số!";
    else{
        var checkAddress = /[!@#$%^&*]/;
        if(checkAddress.test(address.value))
            notice.textContent = "Địa chỉ không được có kí tự đặc biệt!";
        else{
            var checkTelephone = /(0[0-9]{9})/;
            if(checkTelephone.test(telephone.value)==false)
                notice.textContent = "Số điện thoại không được chứa kí tự, đủ 10 chữ số với định dạng (0....)!";
            else{
                var checkQuantityAdult = /^[0-9]+$/;
                var checkQuantityChild = /^[0-9]+$/;
                if(checkQuantityAdult.test(quantityAdult.value)==false||checkQuantityChild.test(quantityChild.value)==false)
                    notice.textContent = "Số lượng đoàn khách phải nhập chữ số!";
                else{
                    notice.textContent = "Bạn đã đăng ký thành công!!!";
                }
            }
        }
    }
    }
});

btnReset.addEventListener('click', function(e){
    e.preventDefault();
    namee.value = "";
    address.value = "";
    telephone.value = "";
    chooseTour.value = 0;
    vhccar.checked = false;
    vhcplane.checked = false;
    quantityAdult.value = "";
    quantityChild.value = "";
});
