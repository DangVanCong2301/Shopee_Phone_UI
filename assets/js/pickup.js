function openModal() {
    document.querySelector(".phone-modal").classList.add("open");
}

function closeModal() {
    document.querySelector(".phone-modal").classList.remove("open");
}

function hideHeader() {
    document.querySelector(".phone-header").classList.add("hide-on-destop");
}

function showHeader() {
    document.querySelector(".phone-header").classList.remove("hide-on-destop");
}

function hideBottomNav() {
    document.querySelector(".phone-bottom__navigation").classList.add("hide-on-destop");
}

function showBottomNav() {
    document.querySelector(".phone-bottom__navigation").classList.remove("hide-on-destop");
}

function openOrderListTab() {
    hideHeader();
    hideBottomNav();
    document.querySelector(".app__container").innerHTML = 
    `
                        <div class="phone-pickup__order-list">
                            <div class="phone-pickup__order-header">
                                <div class="phone-toolbar">
                                    <div class="phone-toolbar__time">
                                        9:12
                                    </div>
                                    <div class="phone-toolbar__right">
                                        <div class="phone-toolbar__wave">
                                            <span class="phone-toolbar__wave-1"></span>
                                            <span class="phone-toolbar__wave-2"></span>
                                            <span class="phone-toolbar__wave-3"></span>
                                            <span class="phone-toolbar__wave-4"></span>
                                        </div>
                                        <div class="phone-toolbar__battery">
                                            <div class="phone-toolbar__battery-percent"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="phone-pickup__order-header-container">
                                    <div class="phone-header__pickup-order-arrow" onclick="backMainTab()">
                                        <i class="uil uil-arrow-left phone-header__pickup-order-arrow-icon"></i>
                                    </div>
                                    <div class="phone-header__pickup-order-title">Chờ lấy hàng</div>
                                </div>
                            </div>
                            <div class="phone-pickup__order-list-title">1 đơn hàng</div>
                            <div class="phone-pickup__works">
                                <div class="phone-pickup__work">
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Mã đơn hàng</div>
                                        <div class="phone-pickup__work-col-2">ĐH01</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Khách hàng</div>
                                        <div class="phone-pickup__work-col-2">Đặng Văn Công</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Ngày đặt</div>
                                        <div class="phone-pickup__work-col-2">2/9/2024</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Tổng tiền</div>
                                        <div class="phone-pickup__work-col-2">291,500 VNĐ</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Trạng thái</div>
                                        <div class="phone-pickup__work-col-2">Chờ lấy hàng</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Thanh toán</div>
                                        <div class="phone-pickup__work-col-2">COD</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1"></div>
                                        <div class="phone-pickup__work-col-2">
                                            <a href="javascript:openOrderDetail()" class="phone-pickup__work-link">Chi tiết đơn</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="phone-pickup__work">
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Mã đơn hàng</div>
                                        <div class="phone-pickup__work-col-2">ĐH01</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Khách hàng</div>
                                        <div class="phone-pickup__work-col-2">Đặng Văn Công</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Ngày đặt</div>
                                        <div class="phone-pickup__work-col-2">2/9/2024</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Tổng tiền</div>
                                        <div class="phone-pickup__work-col-2">291,500 VNĐ</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Trạng thái</div>
                                        <div class="phone-pickup__work-col-2">Chờ lấy hàng</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Thanh toán</div>
                                        <div class="phone-pickup__work-col-2">COD</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1"></div>
                                        <div class="phone-pickup__work-col-2">
                                            <a href="#" class="phone-pickup__work-link">Chi tiết đơn</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="phone-pickup__work">
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Mã đơn hàng</div>
                                        <div class="phone-pickup__work-col-2">ĐH01</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Khách hàng</div>
                                        <div class="phone-pickup__work-col-2">Đặng Văn Công</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Ngày đặt</div>
                                        <div class="phone-pickup__work-col-2">2/9/2024</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Tổng tiền</div>
                                        <div class="phone-pickup__work-col-2">291,500 VNĐ</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Trạng thái</div>
                                        <div class="phone-pickup__work-col-2">Chờ lấy hàng</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1">Thanh toán</div>
                                        <div class="phone-pickup__work-col-2">COD</div>
                                    </div>
                                    <div class="phone-pickup__work-row">
                                        <div class="phone-pickup__work-col-1"></div>
                                        <div class="phone-pickup__work-col-2">
                                            <a href="#" class="phone-pickup__work-link">Chi tiết đơn</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    `;
}

function backMainTab() {
    showHeader();
    showBottomNav();
    document.querySelector(".app__container").innerHTML = 
    `
                        <div class="phone-pickup">
                            <div class="phone-pickup__title">Danh sách cần làm</div>
                            <div class="phone-pickup__list">
                                <div class="phone-pickup__item" onclick="openOrderListTab()">
                                    <div class="phone-pickup__item-numb">0</div>
                                    <div class="phone-pickup__item-numb-text">Chờ lấy hàng</div>
                                </div>
                                <div class="phone-pickup__item">
                                    <div class="phone-pickup__item-numb">0</div>
                                    <div class="phone-pickup__item-numb-text">Đang lấy hàng</div>
                                </div>
                                <div class="phone-pickup__item">
                                    <div class="phone-pickup__item-numb">0</div>
                                    <div class="phone-pickup__item-numb-text">Đã hoàn thành</div>
                                </div>
                                <div class="phone-pickup__item">
                                    <div class="phone-pickup__item-numb">0</div>
                                    <div class="phone-pickup__item-numb-text">Đã Huỷ</div>
                                </div>
                            </div>
                        </div>
    `;
}

function openOrderDetail() {
    hideHeader();
    hideBottomNav();
    document.querySelector(".app__container").innerHTML = 
    `
                        <div class="phone-pickup__order">
                            <div class="phone-pickup__order-header">
                                <div class="phone-toolbar">
                                    <div class="phone-toolbar__time">
                                        9:12
                                    </div>
                                    <div class="phone-toolbar__right">
                                        <div class="phone-toolbar__wave">
                                            <span class="phone-toolbar__wave-1"></span>
                                            <span class="phone-toolbar__wave-2"></span>
                                            <span class="phone-toolbar__wave-3"></span>
                                            <span class="phone-toolbar__wave-4"></span>
                                        </div>
                                        <div class="phone-toolbar__battery">
                                            <div class="phone-toolbar__battery-percent"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="phone-pickup__order-header-container">
                                    <div class="phone-header__pickup-order-arrow" onclick="openOrderListTab()">
                                        <i class="uil uil-arrow-left phone-header__pickup-order-arrow-icon"></i>
                                    </div>
                                    <div class="phone-header__pickup-order-title">Đơn hàng 01</div>
                                </div>
                            </div>
                            <div class="phone-pickup__order-address">
                                <div class="phone-pickup__order-address-destination">
                                    <i class="uil uil-map-marker phone-pickup__order-address-destination-icon"></i>
                                </div>
                                <div class="phone-pickup__order-address-desc">
                                    <div class="phone-pickup__order-address-desc-title">Địa chỉ lấy hàng hàng</div>
                                    <span class="phone-pickup__order-address-desc-name">Laneige</span> <span class="phone-pickup__order-address-desc-divide">|</span>
                                    <span class="phone-pickup__order-address-desc-phone">(+84) 347797502</span>
                                    <div class="phone-pickup__order-address-desc-direction">Số 20, Ngõ 259 Định Công, Phường Định Công, Quận Hoàng Mai, Hà Nội</div>
                                </div>
                            </div>
                            <div class="phone-pickup__order-label">
                                <div class="phone-pickup__order-label-box"></div>
                            </div>
                            <div class="phone-pickup__order-product">
                                <div class="phone-pickup__order-product-list">
                                    <div class="phone-pickup__order-product-item">
                                        <div class="phone-pickup__order-product-item-header">
                                            <div class="phone-pickup__order-product-item-header-favorite">Yêu thích</div>
                                            <div class="phone-pickup__order-product-item-header-shop">Viet Mark</div>
                                        </div>
                                        <div class="phone-pickup__order-product-item-body">
                                            <div class="phone-pickup__order-product-item-thumb">
                                                <img class="phone-pickup__order-product-item-img" src="./assets/img/tai_nghe_5.jpg">
                                            </div>
                                            <div class="phone-pickup__order-product-item-info">
                                                <div class="phone-pickup__order-product-item-info-name">
                                                    Bút Laze Trình Chiếu PowerPoint Kèm Remote Điều Khiển Không Dây Cho Laptop RF 2.4GHz
                                                </div>
                                                <div class="phone-pickup__order-product-item-bottom">
                                                    <div class="phone-pickup__order-product-item-bottom-change">
                                                        <span>Đổi ý miễn phí</span>
                                                    </div>
                                                    <div class="phone-pickup__order-product-item-numb">
                                                        <div class="phone-pickup__order-product-item-numb-qunatity">x3</div>
                                                        <div class="phone-pickup__order-product-item-numb-price">121.000đ</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="phone-pickup__order-product-item-transport">
                                            <div class="phone-pickup__order-product-item-transport-header">Vận chuyển</div>
                                            <div class="phone-pickup__order-product-item-transport-type">
                                                <div class="phone-pickup__order-product-item-transport-type-sub">Nhanh</div>
                                                <div class="phone-pickup__order-product-item-transport-type-price">15.000đ</div>
                                            </div>
                                            <div class="phone-pickup__order-product-item-transport-time">Nhận hàng vào 7 Tháng 7 - 8 Tháng 7</div>
                                            <div class="phone-pickup__order-product-item-transport-inspection">
                                                <span>Được đồng kiểm.</span>
                                                <i class="uil uil-question-circle phone-pickup__order-product-item-transport-inspection-icon"></i>
                                            </div>
                                        </div>
                                        <div class="phone-pickup__order-product-item-into-money">
                                            <div class="phone-pickup__order-product-item-into-money-sub">Thành tiền (1 sản phẩm):</div>
                                            <div class="phone-pickup__order-product-item-into-money-price">121.000đ</div>
                                        </div>
                                    </div>
                                    <div class="phone-pickup__order-product-item">
                                        <div class="phone-pickup__order-product-item-header">
                                            <div class="phone-pickup__order-product-item-header-favorite">Yêu thích</div>
                                            <div class="phone-pickup__order-product-item-header-shop">Viet Mark</div>
                                        </div>
                                        <div class="phone-pickup__order-product-item-body">
                                            <div class="phone-pickup__order-product-item-thumb">
                                                <img class="phone-pickup__order-product-item-img" src="./assets/img/tai_nghe_5.jpg">
                                            </div>
                                            <div class="phone-pickup__order-product-item-info">
                                                <div class="phone-pickup__order-product-item-info-name">
                                                    Bút Laze Trình Chiếu PowerPoint Kèm Remote Điều Khiển Không Dây Cho Laptop RF 2.4GHz
                                                </div>
                                                <div class="phone-pickup__order-product-item-bottom">
                                                    <div class="phone-pickup__order-product-item-bottom-change">
                                                        <span>Đổi ý miễn phí</span>
                                                    </div>
                                                    <div class="phone-pickup__order-product-item-numb">
                                                        <div class="phone-pickup__order-product-item-numb-qunatity">x3</div>
                                                        <div class="phone-pickup__order-product-item-numb-price">121.000đ</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="phone-pickup__order-product-item-transport">
                                            <div class="phone-pickup__order-product-item-transport-header">Vận chuyển</div>
                                            <div class="phone-pickup__order-product-item-transport-type">
                                                <div class="phone-pickup__order-product-item-transport-type-sub">Nhanh</div>
                                                <div class="phone-pickup__order-product-item-transport-type-price">15.000đ</div>
                                            </div>
                                            <div class="phone-pickup__order-product-item-transport-time">Nhận hàng vào 7 Tháng 7 - 8 Tháng 7</div>
                                            <div class="phone-pickup__order-product-item-transport-inspection">
                                                <span>Được đồng kiểm.</span>
                                                <i class="uil uil-question-circle phone-pickup__order-product-item-transport-inspection-icon"></i>
                                            </div>
                                        </div>
                                        <div class="phone-pickup__order-product-item-into-money">
                                            <div class="phone-pickup__order-product-item-into-money-sub">Thành tiền (1 sản phẩm):</div>
                                            <div class="phone-pickup__order-product-item-into-money-price">121.000đ</div>
                                        </div>
                                    </div>
                                    <div class="phone-pickup__order-product-item">
                                        <div class="phone-pickup__order-product-item-header">
                                            <div class="phone-pickup__order-product-item-header-favorite">Yêu thích</div>
                                            <div class="phone-pickup__order-product-item-header-shop">Viet Mark</div>
                                        </div>
                                        <div class="phone-pickup__order-product-item-body">
                                            <div class="phone-pickup__order-product-item-thumb">
                                                <img class="phone-pickup__order-product-item-img" src="./assets/img/tai_nghe_5.jpg">
                                            </div>
                                            <div class="phone-pickup__order-product-item-info">
                                                <div class="phone-pickup__order-product-item-info-name">
                                                    Bút Laze Trình Chiếu PowerPoint Kèm Remote Điều Khiển Không Dây Cho Laptop RF 2.4GHz
                                                </div>
                                                <div class="phone-pickup__order-product-item-bottom">
                                                    <div class="phone-pickup__order-product-item-bottom-change">
                                                        <span>Đổi ý miễn phí</span>
                                                    </div>
                                                    <div class="phone-pickup__order-product-item-numb">
                                                        <div class="phone-pickup__order-product-item-numb-qunatity">x3</div>
                                                        <div class="phone-pickup__order-product-item-numb-price">121.000đ</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="phone-pickup__order-product-item-transport">
                                            <div class="phone-pickup__order-product-item-transport-header">Vận chuyển</div>
                                            <div class="phone-pickup__order-product-item-transport-type">
                                                <div class="phone-pickup__order-product-item-transport-type-sub">Nhanh</div>
                                                <div class="phone-pickup__order-product-item-transport-type-price">15.000đ</div>
                                            </div>
                                            <div class="phone-pickup__order-product-item-transport-time">Nhận hàng vào 7 Tháng 7 - 8 Tháng 7</div>
                                            <div class="phone-pickup__order-product-item-transport-inspection">
                                                <span>Được đồng kiểm.</span>
                                                <i class="uil uil-question-circle phone-pickup__order-product-item-transport-inspection-icon"></i>
                                            </div>
                                        </div>
                                        <div class="phone-pickup__order-product-item-into-money">
                                            <div class="phone-pickup__order-product-item-into-money-sub">Thành tiền (1 sản phẩm):</div>
                                            <div class="phone-pickup__order-product-item-into-money-price">121.000đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="phone-pickup__order-payment-type">
                                <div class="phone-pickup__order-payment-type-header">
                                    <div class="phone-pickup__order-payment-type-header-col">
                                        <i class="uil uil-usd-circle phone-pickup__order-payment-type-header-sub-icon"></i>
                                        <div class="phone-pickup__order-payment-type-header-sub">Phương thức thanh toán</div>
                                    </div>
                                    <div class="phone-pickup__order-payment-type-header-col">
                                        <div class="phone-pickup__order-payment-type-header-sub">Thanh toán khi nhận hàng</div>
                                    </div>
                                </div>
                                <div class="phone-pickup__order-payment-type-pay">
                                    Dùng ShopeePay để tận hưởng nhiều voucer ưu đãi.
                                </div>
                            </div>
                            <div class="phone-pickup__order-detail">
                                <div class="phone-pickup__order-detail-header">
                                    <i class="uil uil-notes phone-pickup__order-detail-header-icon"></i>
                                    <div class="phone-pickup__order-detail-header-sub">Chi tiết thanh toán</div>
                                </div>
                                <div class="phone-pickup__order-detail-body">
                                    <div class="phone-pickup__order-detail-total-price-product">
                                        <div class="phone-pickup__order-detail-total-price-product-sub">Tổng tiền hàng</div>
                                        <div class="phone-pickup__order-detail-total-price-product-numb">212.000đ</div>
                                    </div>
                                    <div class="phone-pickup__order-detail-transport-price">
                                        <div class="phone-pickup__order-detail-transport-price-sub">Phí vận chuyển</div>
                                        <div class="phone-pickup__order-detail-transport-price-numb">212.000đ</div>
                                    </div>
                                </div>
                                <div class="phone-pickup__order-detail-bottom">
                                    <div class="phone-pickup__order-detail-bottom-sub">Thành tiền</div>
                                    <div class="phone-pickup__order-detail-bottom-price">320.000đ</div>
                                </div>
                            </div>
                            <div class="phone-pickup__order-footer" onclick="openReceiveOrderModal()">
                                <div class="phone-header__pickup-order-footer-title">Nhận đơn</div>
                            </div>
                        </div>
    `;
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

// Confirmation of receipt of goods
document.querySelector(".phone-pickup__got-good-btn").addEventListener('click', () => {
    openModal();
    document.querySelector(".phone-modal__body").innerHTML = 
    `
                            <div class="phone-modal__confirm">
                                <div class="phone-modal__confirm-msg">Bạn đã lấy được đơn hàng này?</div>
                                <div class="phone-modal__confirm-btns">
                                    <div class="phone-modal__confirm-btn-no" onclick="closeModal()">Không</div>
                                    <div class="phone-modal__confirm-btn-agree" onclick="openAddImgPicker()">Đồng ý</div>
                                </div>
                            </div>
    `;
});

function openAddImgPicker() {
    document.querySelector(".phone-modal__body").innerHTML = 
    `
                            <div class="phone-modal__add-img">
                                <div class="phone-modal__add-img-title">Thêm ảnh lấy hàng</div>
                                <div class="phone-modal__add-img-check">
                                    <div class="phone-modal__add-img-rb">
                                        <input type="radio" name="ratio-img" id="" class="phone-modal__add-img-input">
                                        <label for="phone-modal__add-img-input" class="phone-modal__add-img-label">Hình ảnh tỉ lệ 1:1</label>
                                    </div>
                                    <div class="phone-modal__add-img-rb">
                                        <input type="radio" name="ratio-img" id="" class="phone-modal__add-img-input">
                                        <label for="phone-modal__add-img-input" class="phone-modal__add-img-label">Hình ảnh tỉ lệ 3:4</label>
                                    </div>
                                </div>
                                <div class="phone-modal__add-img-pic">
                                    <img src="./assets/img/no_img.jpg" class="phone-modal__add-img-value" alt="">
                                    <label class="phone-modal__add-img-pick">
                                        <div class="phone-modal__add-img-pick-container">
                                            <i class="uil uil-image-plus phone-modal__add-img-pick-icon"></i>
                                            <div class="phone-modal__add-img-pick-sub">
                                                Thêm hình ảnh (0/9)
                                            </div>
                                        </div>
                                        <input type="file" accept="image/jpeg, image/png, image/jpg" class="phone-modal__add-img-pick-file" id="input-file">
                                    </label>
                                </div>
                                <div class="phone-modal__add-img-btn" onclick="openChangeInTransit()">Xác nhận</div>
                            </div>
    `;
}

function openChangeInTransit() {
    openModal();
    document.querySelector(".phone-modal__body").innerHTML = `<div class="phone-spinner"></div>`;
    document.querySelector(".phone-pickup__got-good-btn").classList.add("hide-on-destop");
    document.querySelector(".phone-pickup__about-warehouse-btn").classList.remove("hide-on-destop");
    setTimeout(() => {
        closeModal();
        toast({ title: "Thông báo", msg: `Chuyển trạng thái thành công`, type: "success", duration: 5000 });
        document.querySelector(".phone-modal__body").innerHTML = "";
        setTimeout(() => {
            document.querySelector(".phone-pickup__about-warehouse-btn").innerHTML = "Xác nhận đã về tổng kho";
        }, 1000)
    }, 2000);
}

document.querySelector(".phone-pickup__about-warehouse-btn").addEventListener('click', () => {
    openModal();
    document.querySelector(".phone-modal__body").innerHTML = 
    `
                            <div class="phone-modal__confirm">
                                <div class="phone-modal__confirm-msg">Bạn đã gửi đơn hàng tại tổng kho?</div>
                                <div class="phone-modal__confirm-btns">
                                    <div class="phone-modal__confirm-btn-no" onclick="closeModal()">Không</div>
                                    <div class="phone-modal__confirm-btn-agree" onclick="openCompleteJob()">Đồng ý</div>
                                </div>
                            </div>
    `;
});

function openCompleteJob() {
    openModal();
    document.querySelector(".phone-modal__body").innerHTML = `<div class="phone-spinner"></div>`;
    setTimeout(() => {
        closeModal();
        toast({ title: "Thông báo", msg: `Đơn hàng đã xong`, type: "success", duration: 5000 });
        document.querySelector(".phone-modal__body").innerHTML = "";
        setTimeout(() => {
            backMainTab();
        }, 1000)
    }, 2000);
}