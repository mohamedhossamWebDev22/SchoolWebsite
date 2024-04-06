import { useState } from "react";

import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

import NavigBar from "./components/navigBar";
import CardComp from "./components/cardComp";
import Carousel from "react-bootstrap/Carousel";

import icon1 from "./assets/icons/1.png";
import icon2 from "./assets/icons/2.png";
import icon3 from "./assets/icons/3.png";
import Fotr from "./components/fotr";
import NewsCard from "./components/NewsCard";

function App() {
  const [count, setCount] = useState(0);
  let [storedValues, setStoredValues] = useState([]);
  
  const db = getFirestore();

  const fetchDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "news"));
    const temporaryArr = [];
    querySnapshot.forEach((doc) => {
      temporaryArr.push(doc.data());
      console.log(doc.data());
    });
    setStoredValues(temporaryArr);
    alert("data get")
  };

  return (
    <>
      <NavigBar />

      <hr onLoad={fetchDataFromFirestore} id="home" />

      <div className="first text-center py-5 FullHeight d-flex align-items-center justify-content-center">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="txt my-5 pt-5 text-shadow text-light"
        >
          <p>مدرسة</p>
          <h1 className="my-auto mx-auto fontTitle display-1">البراعم</h1>
          <h3 className="fontAra">الابتدائية</h3>

          <br />

          <a href="#more" className="text-light pt-4">
            رؤية المزيد
          </a>
        </div>
      </div>

      {/* cards */}
      <hr id="more" />
      <br />

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="second py-5 my-5"
      >
        <div className="row mx-0 text-center my-5 px-5">
          <div className="col-lg-4">
            <CardComp
              src={icon3}
              title="رؤيتنا"
              txt="إِعْدَادُ طِفْلٍ قَادِرٍ عَلَى مُوَاكَبَةِ اَلتَّحَدِّيَاتِ اَلْعَصْرِيَّةِ وَالْمُتَغَيِّرَاتِ اَلْحَدِيثَةِ"
            />
          </div>
          <div className="col-lg-4">
            <CardComp
              src={icon1}
              title="رسالتنا"
              txt="تَكْوِينُ أَفْرَادٍ نَسْتَطِيع اَلِاعْتِمَادُ عَلَيْهِمْ مُتَحَلِّينَ بِالْأَخْلَاقِ ولَالْعَلْومْ اَلْمُفِيدَةَ لِلنُّهُوضِ بِالْمُسْتَقْبَلِ"
            />
          </div>
          <div className="col-lg-4">
            <CardComp
              src={icon2}
              title="منهجنا"
              txt="مَنَاهِجُنَا مُعْتَمَدَةً مِنْ وِزَارَةِ اَلتَّرْبِيَةِ وَالتَّعْلِيمِ وَيَتِمُّ شَرْحُهَا بِوَاسِطَةِ نُخْبَةٍ مِنْ أَكْفَأِ اَلْمُعَلِّمِينَ"
            />
          </div>
        </div>
      </div>

      {/* news */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="third py-5 bg-success"
        id="news"
      >
        <div className="my-3 py-5 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="text-light display-1 fontTitle pb-5">الأخبار</h1>
            <br />
            <button className="btn btn-success m-5 shadow" onClick={fetchDataFromFirestore}>شوف الأخبار</button>
            <br />
            <div className="my-2 height5">
              <Carousel className="h-100">
                {storedValues.map((value, index) => (
                  <Carousel.Item className="height5" key={index} interval={3000} >
                      <NewsCard title={value.title} text={value.text}/>                    
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* why us ? */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="fourth"
        id="why"
      >
        <div className="py-5">
          <div className="px-5 py-5 text-center d-flex align-items-center justify-content-center">
            <div>
              <h1 className="fontTitle display-1">لماذا نحن؟</h1>
              <p className="fontAra fs-5 mt-5">
                تُعد مدرسة البراعم الابتدائية المشتركة واحدة من الروافد
                التعليمية المتميزة في عالم التعليم، وذلك بفضل توفيرها لبيئة
                تعليمية محفزة ومتطورة تتسم بالتشكيل الرائع. يتميز المدرسون في
                هذه المدرسة بمهارات تدريس عالية وتوجيه فردي لكل طالب يستند إلى
                معرفته واحتياجاته الفردية، مما يؤدي إلى تطوير قدراتهم ومواهبهم
                بشكل ملحوظ. بالإضافة إلى ذلك، تتبنى المدرسة أساليب تعليمية
                متقدمة وحديثة مثل استخدام التكنولوجيا في التعليم، والتفاعل
                الفعّال في الصفوف، وتشجيع المشروعات البحثية والإبداعية للطلاب.
                هذه الأساليب تساعد في تنمية مهارات التفكير النقدي والابتكار لدى
                الطلاب، مما يمنحهم القدرة على التفكير المستقل وحل المشكلات
                بفعالية. لذا، يجب على ولي الأمر اختيار مدرسة البراعم الابتدائية
                المشتركة إذا كان يبحث عن بيئة تعليمية محفزة ومتميزة تهدف إلى
                تطوير شامل للطلاب، من خلال مدرسين متخصصين وأساليب تعليمية متطورة
                تلبي احتياجات العصر وتساهم في بناء مستقبلهم.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Fotr />
    </>
  );
}

export default App;
