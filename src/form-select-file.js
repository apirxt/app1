import React from 'react';

export default function FormSelectFile() {
    const inputFile = React.useRef();
    const selectMaxNumFiles = React.useRef();
    const selectMaxSize = React.useRef();

    const maxNumFiles = [1, 2, 3, 4, 5];
    const maxSize = [50, 100, 200, 500, 1000];

    const onClickButton = () => {
        let maxNum = selectMaxNumFiles.current.value;
        let maxSizeFile = selectMaxSize.current.value;

        if (!maxNum || !maxSizeFile) {
            alert("กรุณาเลือกจำนวนไฟล์และขนาดไฟล์");
            return;
        }

        if (inputFile.current.files.length > maxNum) {
            alert(`เลือกได้ไม่เกิน ${maxNum} ไฟล์`);
            return;
        }

        for (let file of inputFile.current.files) {
            if (file.size > maxSizeFile * 1000) {
                alert(`ขนาดของแต่ละไฟล์ต้องไม่เกิน ${maxSizeFile} KB`);
                return;
            }
        }
        alert('Files OK');
    };

    return (
        <div className="mt-4 mx-auto p-3 rounded" style={{ width: '400px', background: '#cee' }}>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="maxNumFiles" className="form-label">จำนวนไฟล์สูงสุด</label>
                    <select id="maxNumFiles" className="form-select form-select-sm" ref={selectMaxNumFiles}>
                        {maxNumFiles.map(i => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="maxFileSize" className="form-label">ขนาดไฟล์สูงสุด (KB)</label>
                    <select id="maxFileSize" className="form-select form-select-sm" ref={selectMaxSize}>
                        {maxSize.map(i => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="file" className="form-label">เลือกไฟล์</label>
                    <input
                        type="file"
                        id="file"
                        accept="image/*"
                        className="form-control form-control-sm"
                        ref={inputFile}
                        multiple
                    />
                </div>
                <div className="text-center mt-4">
                    <button
                        type="button"
                        className="btn btn-sm btn-primary px-4"
                        onClick={onClickButton}
                    >
                        OK
                    </button>
                </div>
            </form>
        </div>
    );
}