import CryptoJS from 'crypto-js';
import zxcvbn from 'zxcvbn';

// セキュリティ設定
const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY || 'your-secure-key';
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30分

// パスワード強度チェック
export const checkPasswordStrength = (password: string): {
  score: number;
  feedback: {
    warning: string;
    suggestions: string[];
  };
} => {
  const result = zxcvbn(password);
  return {
    score: result.score,
    feedback: result.feedback
  };
};

// データの暗号化
export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, ENCRYPTION_KEY).toString();
};

// データの復号化
export const decryptData = (encryptedData: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// セッション管理
export const setSecureSession = (key: string, value: any): void => {
  const sessionData = {
    value,
    timestamp: new Date().getTime()
  };
  sessionStorage.setItem(key, JSON.stringify(sessionData));
};

export const getSecureSession = (key: string): any | null => {
  const sessionData = sessionStorage.getItem(key);
  if (!sessionData) return null;

  const { value, timestamp } = JSON.parse(sessionData);
  const now = new Date().getTime();

  if (now - timestamp > SESSION_TIMEOUT) {
    sessionStorage.removeItem(key);
    return null;
  }

  return value;
};

// XSS対策
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// CSRF対策トークン生成
export const generateCSRFToken = (): string => {
  const token = CryptoJS.lib.WordArray.random(32).toString();
  setSecureSession('csrfToken', token);
  return token;
};

// CSRF対策トークン検証
export const validateCSRFToken = (token: string): boolean => {
  const storedToken = getSecureSession('csrfToken');
  return token === storedToken;
};

// セキュアなHTTPヘッダー設定
export const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; img-src 'self' https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
};