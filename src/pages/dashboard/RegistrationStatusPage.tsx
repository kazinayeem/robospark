import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const RegistrationStatusPage = () => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const ref = doc(db, "settings", "registration");

  const fetchStatus = async () => {
    setLoading(true);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      setIsOpen(snap.data().open);
    } else {
      // Create default document if missing
      await setDoc(ref, { open: false });
      setIsOpen(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const toggleRegistration = async () => {
    setSaving(true);

    try {
      const newStatus = !isOpen;

      // Ensure document exists
      await setDoc(ref, { open: newStatus }, { merge: true });

      setIsOpen(newStatus);
    } catch (err) {
      console.error("Error updating registration:", err);
      alert("Failed to update. Check Firestore rules.");
    }

    setSaving(false);
  };

  if (loading) return <p style={{ padding: 20 }}>Checking registration...</p>;

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {isOpen ? (
        <h1 style={{ color: "green" }}>✅ Registration is Open</h1>
      ) : (
        <h1 style={{ color: "red" }}>❌ Registration is Closed</h1>
      )}

      <button
        onClick={toggleRegistration}
        disabled={saving}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          background: isOpen ? "red" : "green",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {saving
          ? "Updating..."
          : isOpen
          ? "Turn Registration OFF"
          : "Turn Registration ON"}
      </button>
    </div>
  );
};

export default RegistrationStatusPage;
