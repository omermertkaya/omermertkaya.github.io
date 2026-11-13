+++
title = 'Active Directory userAccountControl (UAC) Değerleri'
date = 2026-11-13T21:30:00+03:00
draft = false
translationKey = 'ad-user-account-control-degerleri'
+++



Active Directory'de her kullanıcı ve bilgisayar nesnesinin `userAccountControl` (UAC) adında bir niteliği vardır. Bu nitelik, hesabın durumunu ve davranışını belirleyen bir dizi bit bayrağının (bit flag) toplamını tutar: hesabın etkin olup olmadığı, parolasının süresinin dolup dolmadığı, akıllı kart (smartcard) gerektirip gerektirmediği gibi ayarların tamamı tek bir tam sayı değerinde kodlanır.

Değer **bitwise (bit düzeyinde)** mantıkla okunur. Örneğin "parolası hiç dolmayan" (`DONT_EXPIRE_PASSWORD = 65536`) ve "etkin normal hesap" (`NORMAL_ACCOUNT = 512`) bayraklarının birleşimi `512 + 65536 = 66048` değerini verir. Bu yüzden belirli bir ayara sahip hesapları ararken eşitlik değil, bit maskeleme (`-band`) kullanılır.

> **Örnek:** Parolası hiç dolmayacak (password never expires) şekilde ayarlanmış kullanıcıları bulmak için aşağıdaki PowerShell komutu kullanılabilir.

```powershell
Get-ADUser -Filter "useraccountcontrol -band 65536" -Properties userAccountControl |
    Select-Object Name, SamAccountName, userAccountControl
```

`-band 65536` ifadesi, `DONT_EXPIRE_PASSWORD` biti set edilmiş tüm hesapları döndürür; hesabın etkin/pasif ya da başka bayraklara sahip olması sonucu etkilemez.

---

## Varsayılan Değerler

| Nesne Türü | Ondalık Değer | Hex |
|-----------|---------------|-----|
| Standart kullanıcı (etkin, normal hesap) | 512 | 0x200 |
| İş istasyonu / üye sunucu | 4096 | 0x1000 |
| Domain Controller | 532480 | 0x82000 |

---

## Yaygın Birleşik Değerler

Aşağıdaki tablo, sık karşılaşılan bayrak kombinasyonlarını ve karşılık geldikleri hesap durumlarını gösterir.

| Değer | Açıklama |
|-------|----------|
| 512 | Enabled Account (Etkin hesap) |
| 514 | Disabled Account (Pasif hesap) |
| 544 | Enabled, Password Not Required |
| 546 | Disabled, Password Not Required |
| 66048 | Enabled, Password Doesn't Expire |
| 66050 | Disabled, Password Doesn't Expire |
| 66080 | Enabled, Password Doesn't Expire & Not Required |
| 66082 | Disabled, Password Doesn't Expire & Not Required |
| 262656 | Enabled, Smartcard Required |
| 262658 | Disabled, Smartcard Required |
| 262688 | Enabled, Smartcard Required, Password Not Required |
| 262690 | Disabled, Smartcard Required, Password Not Required |
| 328192 | Enabled, Smartcard Required, Password Doesn't Expire |
| 328194 | Disabled, Smartcard Required, Password Doesn't Expire |
| 328224 | Enabled, Smartcard Required, Password Doesn't Expire & Not Required |
| 328226 | Disabled, Smartcard Required, Password Doesn't Expire & Not Required |

---

## Bireysel Bayraklar (Property Flags)

Her bir bayrak tek bir biti temsil eder. Bir hesabın `userAccountControl` değeri, aşağıdaki bireysel değerlerin toplamından oluşur.

| Bayrak | Hex | Ondalık |
|--------|-----|---------|
| SCRIPT | 0x0001 | 1 |
| ACCOUNTDISABLE | 0x0002 | 2 |
| HOMEDIR_REQUIRED | 0x0008 | 8 |
| LOCKOUT | 0x0010 | 16 |
| PASSWD_NOTREQD | 0x0020 | 32 |
| PASSWD_CANT_CHANGE | 0x0040 | 64 |
| ENCRYPTED_TEXT_PWD_ALLOWED | 0x0080 | 128 |
| TEMP_DUPLICATE_ACCOUNT | 0x0100 | 256 |
| NORMAL_ACCOUNT | 0x0200 | 512 |
| INTERDOMAIN_TRUST_ACCOUNT | 0x0800 | 2048 |
| WORKSTATION_TRUST_ACCOUNT | 0x1000 | 4096 |
| SERVER_TRUST_ACCOUNT | 0x2000 | 8192 |
| DONT_EXPIRE_PASSWORD | 0x10000 | 65536 |
| MNS_LOGON_ACCOUNT | 0x20000 | 131072 |
| SMARTCARD_REQUIRED | 0x40000 | 262144 |
| TRUSTED_FOR_DELEGATION | 0x80000 | 524288 |
| NOT_DELEGATED | 0x100000 | 1048576 |
| USE_DES_KEY_ONLY | 0x200000 | 2097152 |
| DONT_REQ_PREAUTH | 0x400000 | 4194304 |
| PASSWORD_EXPIRED | 0x800000 | 8388608 |
| TRUSTED_TO_AUTH_FOR_DELEGATION | 0x1000000 | 16777216 |
| PARTIAL_SECRETS_ACCOUNT | 0x04000000 | 67108864 |

---

## Kaynak

Bayrak adları ve değerleri Microsoft'un resmi dokümanına dayanmaktadır: [How to use the UserAccountControl flags to manipulate user account properties](https://learn.microsoft.com/en-us/troubleshoot/windows-server/active-directory/useraccountcontrol-manipulate-account-properties).
