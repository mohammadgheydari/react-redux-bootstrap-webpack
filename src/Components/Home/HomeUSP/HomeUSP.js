import React from "react";
import "./homeUSP.scss";
const HomeUSP = props => {
  return (
    <div className="UnderSearchbox bg-white pt-3 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-sm-12 col-xs-12">
            <div className="box-feature text-center top-box-padding HomeUSP">
              <span className="about-ico">
                <i className="icon i-24-hours" />
              </span>
              <h2 className="about-title">پشتیبانی 24 ساعته</h2>
              <h3 className="title-description">
                همکاران ما در فلایتیو، در 24 ساعت شبانه روز و هر 7 روز هفته، حتی
                در ایام تعطیلات رسمی، به صورت تلفنی آماده ی پاسخگویی و رفع
                مشکلات احتمالی شما هستنند.
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-sm-12 col-xs-12">
            <div className="box-feature text-center top-box-padding HomeUSP">
              <span className="about-ico">
                <i className="icon i-discount" />
              </span>
              <h2 className="about-title">ارائه بهترین قیمت</h2>
              <h3 className="title-description">
                بلیط های برترین خطوط هوایی داخلی و خارجی در فلایتیو، با احتساب
                تخفیف و با تضمین بهترین قیمت به شما ارائه می شود.
              </h3>
            </div>
          </div>
          <div className="clearfix visible-sm" />
          <div className="col-lg-3 col-md-3 col-sm-6 col-sm-12 col-xs-12">
            <div className="box-feature text-center top-box-padding HomeUSP">
              <span className="about-ico">
                <i className="icon i-best-seller" />
              </span>
              <h2 className="about-title">ضمانت ویژه بلیط</h2>
              <h3 className="title-description">
                خرید شما از فلایتیو، حتی در مورد بلیط های چارتر دارای ضمانت ویژه
                است. در صورت وجود مشکلی از جانب ما، هزینه های مازاد توسط ما
                پرداخت خواهد شد.
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-sm-12 col-xs-12">
            <div className="box-feature text-center top-box-padding HomeUSP">
              <span className="about-ico">
                <i className="icon i-money" />
              </span>
              <h2 className="about-title">استرداد آنلاین بلیط</h2>
              <h3 className="title-description">
                شما می توانید به راحتی و بدون تقبل هیچگونه هزینه اضافه&zwnj;ای
                بلیط خریداری شده ی خود را بصورت کاملا آنلاین مسترد نمایید.
              </h3>
            </div>
          </div>

          <div className="col-xs-12 col">
            <span
              className="text-center d-block"
              style={{ lineHeight: 1.8, fontSize: "15px" }}
            >
              با توجه به نوسانات بوجود آمده مقرر گردید، قیمت بلیط هوایی در
              مسیرهای مختلف پروازهای داخلی تا پایان شهریور ماه بر اساس قیمتهای
              سایت انجمن شرکتهای هواپیمایی به آدرس
              <a
                href="http://www.aira.ir"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                www.aira.ir
              </a>
              محاسبه گردد. لطفا در صورت مشاهده مغایرت، با پشتیبانی فلایتیو تماس
              بگیرید.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeUSP;
