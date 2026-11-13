+++
title = 'Active Directory userAccountControl (UAC) Values'
date = 2026-11-13T21:30:00+03:00
draft = false
translationKey = 'ad-user-account-control-degerleri'
+++



In Active Directory, every user and computer object has an attribute called `userAccountControl` (UAC). This attribute stores the sum of a set of bit flags that define the account's state and behavior: whether the account is enabled, whether its password expires, whether it requires a smartcard, and so on — all of these settings are encoded into a single integer value.

The value is read using **bitwise** logic. For example, the "password never expires" flag (`DONT_EXPIRE_PASSWORD = 65536`) combined with "enabled normal account" (`NORMAL_ACCOUNT = 512`) produces `512 + 65536 = 66048`. For this reason, when searching for accounts with a specific setting you use bit masking (`-band`) rather than equality.

> **Example:** To find users configured so their password never expires, you can use the following PowerShell command.

```powershell
Get-ADUser -Filter "useraccountcontrol -band 65536" -Properties userAccountControl |
    Select-Object Name, SamAccountName, userAccountControl
```

The `-band 65536` expression returns every account with the `DONT_EXPIRE_PASSWORD` bit set, regardless of whether the account is enabled/disabled or carries other flags.

---

## Default Values

| Object Type | Decimal Value | Hex |
|-------------|---------------|-----|
| Standard user (enabled, normal account) | 512 | 0x200 |
| Workstation / member server | 4096 | 0x1000 |
| Domain Controller | 532480 | 0x82000 |

---

## Common Combined Values

The following table lists frequently encountered flag combinations and the account states they represent.

| Value | Description |
|-------|-------------|
| 512 | Enabled Account |
| 514 | Disabled Account |
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

## Individual Property Flags

Each flag represents a single bit. An account's `userAccountControl` value is the sum of the individual values below.

| Property Flag | Hex | Decimal |
|---------------|-----|---------|
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

## Source

The flag names and values are based on Microsoft's official documentation: [How to use the UserAccountControl flags to manipulate user account properties](https://learn.microsoft.com/en-us/troubleshoot/windows-server/active-directory/useraccountcontrol-manipulate-account-properties).
