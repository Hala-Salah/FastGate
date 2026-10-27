import { useState } from "react";
import { Form, Row, Col, Modal } from "react-bootstrap";
import styles from "./styles.module.css";
import FormError from "../../SharedComponents/ErrorMessage/ErrorMessage";
import SharedButton from "../../SharedComponents/SharedButtons/SharedButtons";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const validate = (data: FormData): FormErrors => {
  const errs: FormErrors = {};

  if (!data.name.trim()) errs.name = "Please enter your full name.";

  if (!data.email.trim()) {
    errs.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errs.email = "Please enter a valid email address.";
  }

  if (data.phone && !/^[+\d\s()-]{7,}$/.test(data.phone)) {
    errs.phone = "Please enter a valid phone number.";
  }

  if (!data.subject.trim()) errs.subject = "Please enter a subject.";
  if (!data.message.trim()) errs.message = "Please write your message.";

  return errs;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showThanks, setShowThanks] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name = e.target.name as keyof FormData;
    setFormData({ ...formData, [name]: e.target.value });
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // TODO: connect backend / email service later
    console.log("Form submitted:", formData);
    setFormData(initialData);
    setShowThanks(true);
  };

  const controlClass = (field: keyof FormData) =>
    `${styles.formControl} ${errors[field] ? styles.invalid : ""}`;

  return (
    <div className={styles.card}>
      <h4>Send Us a Message</h4>
      <p style={{ opacity: 0.7, marginBottom: "1.5rem" }}>
        Fill the form below and we'll get back to you shortly.
      </p>

      <Form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className={styles.formLabel}>Full Name</Form.Label>
              <Form.Control
                className={controlClass("name")}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <FormError message={errors.name} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className={styles.formLabel}>Phone</Form.Label>
              <Form.Control
                className={controlClass("phone")}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <FormError message={errors.phone} />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label className={styles.formLabel}>Email</Form.Label>
          <Form.Control
            className={controlClass("email")}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormError message={errors.email} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className={styles.formLabel}>Subject</Form.Label>
          <Form.Control
            className={controlClass("subject")}
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <FormError message={errors.subject} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className={styles.formLabel}>Message</Form.Label>
          <Form.Control
            className={controlClass("message")}
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <FormError message={errors.message} />
        </Form.Group>

        <SharedButton
          label="Send Message"
          variant="primarybutton"
          type="submit"
        />
      </Form>

      <Modal
        show={showThanks}
        onHide={() => setShowThanks(false)}
        centered
        contentClassName={styles.thanksContent}
      >
        <Modal.Body className={styles.thanksBody}>
          <div className={styles.thanksIconRing}>
            <div className={styles.thanksIcon}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          <h3 className={styles.thanksTitle}>Thank You!</h3>
          <p className={styles.thanksText}>
            We received your message and will get back to you shortly.
          </p>

          <SharedButton label="Back to Home" href="/" variant="primarybutton" />

          <button
            type="button"
            className={styles.thanksClose}
            onClick={() => setShowThanks(false)}
          >
            Close
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactForm;
