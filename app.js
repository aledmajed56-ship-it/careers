import { db } from './firebase-config.js';
import { collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// دالة لجلب الوظائف من Firebase وعرضها في الموقع
export function loadJobs() {
    const jobsRef = collection(db, "jobs");
    const q = query(jobsRef, orderBy("timestamp", "desc")); // ترتيب الوظائف من الأحدث

    onSnapshot(q, (snapshot) => {
        const jobsContainer = document.getElementById('jobsContainer');
        if (!jobsContainer) return;
        
        jobsContainer.innerHTML = ''; // تفريغ القائمة الحالية

        snapshot.forEach((doc) => {
            const job = doc.data();
            const jobElement = document.createElement('div');
            jobElement.className = 'card';
            jobElement.innerHTML = `
                <h3>${job.title || 'بدون عنوان'}</h3>
                <p>${job.description || ''}</p>
                <p><strong>الموقع:</strong> ${job.location || 'غير محدد'}</p>
            `;
            jobsContainer.appendChild(jobElement);
        });
    });
}

// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadJobs);
