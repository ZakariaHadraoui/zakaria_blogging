import Image from 'next/image';
import styles from './writePage.module.css';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.bubble.css';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { app } from '@/utils/firebase';
import ReactQuill from 'react-quill';

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState('');
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [catSlug, setCatSlug] = useState('');

  useEffect(() => {
    // Firebase Storage initialization
    const storage = getStorage(app);

    // Function to handle file upload
    const uploadFile = () => {
      if (!file) return;

      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Event listeners for upload progress and completion
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          console.error('Error uploading file:', error);
          // Handle upload errors here
        },
        () => {
          // Upload completed successfully, get download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    // Trigger file upload when file state changes
    file && uploadFile();
  }, [file]); // Dependency on 'file' ensures this effect runs when 'file' changes

  useEffect(() => {
    // Load Stripe script on component mount
    const loadStripeScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://js.stripe.com/v3/';

      document.head.appendChild(script);

      script.onload = () => {
        // Stripe script loaded successfully
        console.log('Stripe script loaded');
        // You can initialize Stripe or handle other logic here
      };
    };

    loadStripeScript(); // Call the function to load Stripe script
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]); // Dependency on 'status' ensures redirection when authentication status changes

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
          catSlug: catSlug || 'style', // Default category if not selected
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        router.push(`/posts/${data.slug}`);
      } else {
        throw new Error('Failed to save post');
      }
    } catch (error) {
      console.error('Error publishing post:', error);
      // Handle error state or display error message to user
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        value={catSlug}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: 'none' }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
