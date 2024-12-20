import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import "./Education.css";
import DataContext from "../../..";


function Education(props) {
    const education = useContext(DataContext).education;
    const { t } = useTranslation();
    return(
        <div className="education">
            {
                education.formal.map((e, i) => {
                    return (
                        <div
                            key={`education${i}`}
                        >
                            <div className="edu-title">{t(e.title)}</div>
                            <div className="edu-2">
                                <div className="edu-years">{e.years}</div>
                                <div className="edu-center">{t(e.center)}</div>
                            </div>
                            <br />
                        </div>
                    )
                })
            }
            <br />
            <div className="edu-title">{t("courses")}</div>
            <br />
            <div className="edu-2">
            {
                education.courses.map((c, i) => {
                    return (
                        <div
                            key={`education-course${i}`}
                        >
                            <div className="edu-title2">- {t(c.title)}</div>
                            <div className="edu-2">
                                <div className="edu-years">{c.year}</div>
                                <div className="edu-center">{t(c.center)}</div>
                            </div>
                            {
                                i < education.courses.length - 1 && <br />
                            }
                        </div>
                    )
                })
            }
                
            </div>
        </div>
    )
}

export default Education;