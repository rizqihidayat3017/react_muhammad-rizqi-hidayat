# 9_Clean Code

## Resume

# Pembelajaran
Pada section 9 mempelajari :  
1. Mempelajari pengertian Clean Code  
2. Mempelajarai karakteristik Clean Code  
3. Mempelajari clean code principle  
4. Mengerjakan tugas Clean Code  

## Pengertian Clean Code
Clean Code adalah istilah untuk kode yang mudah dibaca, dipahami, dan diubah oleh progammer.

## Karakteristik Clean Code  
1. Mudah dipahami  
2. Mudah dieja dan dicari  
3. Singkat namun mendeskrpsikan konteks  
4. Konsisten  
5. Hindari penambahan konteks yang tidak perlu  
6. Komentar  
7. Good Function  
8. Gunakan konvensi  
9. Formatting  

# Task
Problem 1 - Analysis.
A. Bagian mana saja terjadi kekurangan tersebut?
1. Pada line 10 pemanggilan fungsi "getallusers" tidak perlu ada tambahan users.  
2. Pada line 14 pemanggilan fungsi "getuserbyid" tidak perlu ada tambahan user.  
3. Terdapat penambahan konteks yang tidak perlu.  
4. Awal/paling depan pada nama class menggunakan huruf kecil.  

B. Tuliskan alasan dari tiap kekurangan tersebut!
1. Pada line 10 penamaan fungsi "getallusers" tidak perlu ada tambahan users karena terdapat class user yang dimana sudah pasti memanggil yang ada di class user, jadi cukup menggunakan getall saja.  
2. Pada line 14 pemanggilan fungsi "getuserbyid" tidak perlu ada tambahan user karena terdapat class user yang dimana sudah pasti memanggil yang ada di class user, jadi cukup menggunakan getbyid saja.  
3. Salah satu karakteristik clean code adalah mengindari penambahan konteks yang tidak perlu  
4. Penamaan awal/paling depan pada class harus memakai huruf kapital.  

Problem 2 - Rewrite.  
![alt text](https://github.com/rizqihidayat3017/react_muhammad-rizqi-hidayat/blob/master/9_Clean%20Code/Screenshoot/jawaban%20nomor%202.PNG)  



