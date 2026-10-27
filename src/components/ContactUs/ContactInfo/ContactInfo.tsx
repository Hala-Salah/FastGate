import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { contactInfo } from "../../../data/contactInfo";
import styles from "./styles.module.css";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className={styles.card}>
      <h4>Get in Touch</h4>
      <p style={{ opacity: 0.7 }}>We'd love to hear from you.</p>

      <div className={styles.infoRow}>
        <div className={styles.iconWrap}>
          <HiOutlinePhone size={18} />
        </div>
        <div>
          {contactInfo.phones.map((phone) => (
            <div key={phone}>{phone}</div>
          ))}
        </div>
      </div>

      <div className={styles.infoRow}>
        <div className={styles.iconWrap}>
          <HiOutlineMail size={18} />
        </div>
        <div>{contactInfo.email}</div>
      </div>

      <div className={styles.infoRow}>
        <div className={styles.iconWrap}>
          <HiOutlineLocationMarker size={18} />
        </div>
        <div>{contactInfo.address}</div>
      </div>

      <div className={styles.sectionLabel}>
        <HiOutlineClock size={16} style={{ marginRight: 6 }} />
        Working Hours
      </div>
      {contactInfo.workingHours.map((wh) => (
        <div key={wh.day} className={styles.infoRow}>
          <span style={{ minWidth: 140 }}>{wh.day}</span>
          <span style={{ opacity: 0.7 }}>{wh.hours}</span>
        </div>
      ))}

      <div className={styles.sectionLabel}>Follow Us</div>
      <div className={styles.socialRow}>
        {contactInfo.socialMedia.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={s.name}
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
