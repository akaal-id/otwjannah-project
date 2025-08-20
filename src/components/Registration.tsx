"use client";
import React, { useEffect, useState } from 'react';

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLScslqhkz7CuIqqCvy4fqoSB_ZOqtslw25gSUxBXmNv2Q_zzGw/formResponse';

const Registration: React.FC = () => {
  interface FormData {
    nama: string;
    email: string;
    telepon: string;
    tanggalLahir: string; // ISO date string from <input type="date">
    jenisKelamin: string;
  }

  type FormErrors = Partial<Record<keyof FormData, string>>;

  const [formData, setFormData] = useState<FormData>({
    nama: '',
    email: '',
    telepon: '',
    tanggalLahir: '',
    jenisKelamin: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const id = 'google-form-hidden-iframe';
    if (!document.getElementById(id)) {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'google_form_iframe';
      iframe.id = id;
      document.body.appendChild(iframe);
    }
  }, []);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.nama.trim()) newErrors.nama = 'Nama wajib diisi';
    if (!formData.email) newErrors.email = 'Email wajib diisi';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Format email tidak valid';
    if (!formData.telepon) newErrors.telepon = 'Nomor telepon wajib diisi';
    else if (formData.telepon.replace(/\D/g, '').length < 10) newErrors.telepon = 'Nomor telepon minimal 10 digit';
    if (!formData.tanggalLahir) newErrors.tanggalLahir = 'Tanggal lahir wajib diisi';
    if (!formData.jenisKelamin) newErrors.jenisKelamin = 'Jenis kelamin wajib dipilih';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof FormData;
    let value = e.target.value;
    if (name === 'telepon') value = value.replace(/\D/g, '');
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // mapping based on the entry IDs you provided in the attachment
      const mapping: Record<string, string> = {
        'entry.57155256': formData.nama,
        'entry.717374900': formData.email,
        'entry.1492164492': formData.telepon,
        // date split fields
        'entry.1270923378_year': '',
        'entry.1270923378_month': '',
        'entry.1270923378_day': '',
        'entry.191491965': formData.jenisKelamin
      };

      if (formData.tanggalLahir) {
        const d = new Date(formData.tanggalLahir);
        if (!isNaN(d.getTime())) {
          mapping['entry.1270923378_year'] = String(d.getFullYear());
          mapping['entry.1270923378_month'] = String(d.getMonth() + 1);
          mapping['entry.1270923378_day'] = String(d.getDate());
        }
      }

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_FORM_ACTION;
      form.target = 'google_form_iframe';
      form.style.display = 'none';

      Object.entries(mapping).forEach(([k, v]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = k;
        input.value = v ?? '';
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      setTimeout(() => {
        form.remove();
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ nama: '', email: '', telepon: '', tanggalLahir: '', jenisKelamin: '' });
      }, 1200);
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan saat mengirim. Silakan coba lagi.');
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-20 px-4 text-center bg-transparent">
        <div className="max-w-md mx-auto bg-[#0a0a0a]/50 p-8 rounded-2xl border border-[#e2b86a]/20">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-[#e2b86a] mb-4">Registrasi Berhasil!</h3>
          <p className="text-[#C3BEA1] mb-6">Terima kasih telah mendaftar. Kami akan menghubungi Anda melalui WhatsApp untuk informasi selanjutnya.</p>
          <button onClick={() => setIsSubmitted(false)} className="bg-[#e2b86a] text-[#0a0a0a] px-6 py-2 rounded-lg font-semibold hover:bg-[#cea15c] transition-colors">Daftar Lagi</button>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-20 px-4 text-center bg-transparent">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e2b86a]">Form Registrasi</h2>
        <p className="text-[#C3BEA1] mb-8 text-lg">Daftarkan diri Anda untuk berpartisipasi dalam event On The Way to Jannah</p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#0a0a0a]/50 p-8 rounded-2xl border border-[#e2b86a]/20">
          <div className="mb-6 text-left">
            <label className="block text-[#C3BEA1] mb-2 font-medium">Nama Lengkap *</label>
            <input type="text" name="nama" value={formData.nama} onChange={handleChange} className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-[#C3BEA1] focus:outline-none focus:border-[#e2b86a] transition-colors ${errors.nama ? 'border-red-500' : 'border-[#333]'}`} placeholder="Masukkan nama lengkap" />
            {errors.nama && <p className="text-red-400 text-sm mt-1">{errors.nama}</p>}
          </div>

          <div className="mb-6 text-left">
            <label className="block text-[#C3BEA1] mb-2 font-medium">Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-[#C3BEA1] focus:outline-none focus:border-[#e2b86a] transition-colors ${errors.email ? 'border-red-500' : 'border-[#333]'}`} placeholder="email@contoh.com" />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6 text-left">
            <label className="block text-[#C3BEA1] mb-2 font-medium">No. WhatsApp *</label>
            <input type="tel" name="telepon" value={formData.telepon} onChange={handleChange} className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-[#C3BEA1] focus:outline-none focus:border-[#e2b86a] transition-colors ${errors.telepon ? 'border-red-500' : 'border-[#333]'}`} placeholder="08xxxxxxxxxx" maxLength={15} />
            {errors.telepon && <p className="text-red-400 text-sm mt-1">{errors.telepon}</p>}
          </div>

          <div className="mb-6 text-left">
            <label className="block text-[#C3BEA1] mb-2 font-medium">Tanggal Lahir *</label>
            <input type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-[#C3BEA1] focus:outline-none focus:border-[#e2b86a] transition-colors ${errors.tanggalLahir ? 'border-red-500' : 'border-[#333]'}`} />
            {errors.tanggalLahir && <p className="text-red-400 text-sm mt-1">{errors.tanggalLahir}</p>}
          </div>

          <div className="mb-8 text-left">
            <label className="block text-[#C3BEA1] mb-2 font-medium">Jenis Kelamin *</label>
            <select name="jenisKelamin" value={formData.jenisKelamin} onChange={handleChange} className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-[#C3BEA1] focus:outline-none focus:border-[#e2b86a] transition-colors ${errors.jenisKelamin ? 'border-red-500' : 'border-[#333]'}`}>
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            {errors.jenisKelamin && <p className="text-red-400 text-sm mt-1">{errors.jenisKelamin}</p>}
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#e2b86a] to-[#cea15c] text-[#0a0a0a] py-3 px-6 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50">{isSubmitting ? 'Mengirim...' : 'Daftar Sekarang'}</button>
        </form>
      </div>
    </section>
  );
};

export default Registration;