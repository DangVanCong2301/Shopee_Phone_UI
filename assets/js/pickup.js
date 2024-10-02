function openModal() {
    document.querySelector(".phone-modal").classList.add("open");
}

function closeModal() {
    document.querySelector(".phone-modal").classList.remove("open");
}

function openReceiveOrderModal() {
    openModal();
    document.querySelector(".phone-modal__body").innerHTML = 
    `
                            <div class="phone-modal__confirm">
                                <div class="phone-modal__confirm-msg">Bạn có chắc muốn nhận đơn hàng này?</div>
                                <div class="phone-modal__confirm-btns">
                                    <div class="phone-modal__confirm-btn-no" onclick="closeModal()">Không</div>
                                    <div class="phone-modal__confirm-btn-agree">Đồng ý</div>
                                </div>
                            </div>
    `;
}