const _DATA = [13,0,12,9,12,12,9,13,0,14,10,14];
const _KEY = 0x38;

export function getTargetId() {
    return _DATA
        .map(byte => String.fromCharCode(byte ^ _KEY))
        .join('');
}