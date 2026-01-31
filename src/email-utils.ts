export interface ChecklistData {
  installDate: string
  vehicleVin: string
  productName: string
  productConfig: string
  installerName: string
  customerName: string
  customerEmail: string
  checklist: Record<string, Record<string, boolean>>
  installerSignature: string
  customerSignature: string
  photos: Record<string, string>
}

const sections = [
  { title: '차바닥', items: ['외관, 표면', '고정볼트', '테두리고정 및 마감', '소음'] },
  { title: '격벽타공판', items: ['외관, 표면, 도장, 로고', '고정볼트', '테두리고정 및 마감'] },
  { title: '격벽 2단 선반', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
  { title: '3단 선반', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
  { title: '부품 3단 선반', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
  { title: '워크스페이스', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] }
]

export function generateEmailHTML(data: ChecklistData): string {
  const checkedCount = Object.values(data.checklist).reduce((acc, sec) => acc + Object.values(sec).filter(v => v).length, 0)
  const totalCount = sections.reduce((acc, s) => acc + s.items.length, 0)
  
  let checklistHTML = ''
  sections.forEach((sec, si) => {
    checklistHTML += '<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">' + sec.title + '</h3><table style="width:100%;border-collapse:collapse;">'
    sec.items.forEach((item, ii) => {
      const checked = data.checklist[si]?.[ii] || false
      checklistHTML += '<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">' + item + '</td><td style="padding:10px;text-align:center;font-size:20px;">' + (checked ? '✅' : '⬜') + '</td></tr>'
      const photoKey = si + '-' + ii
      if (data.photos[photoKey]) {
        checklistHTML += '<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="' + data.photos[photoKey] + '" style="max-width:400px;max-height:300px;border-radius:8px;"></td></tr>'
      }
    })
    checklistHTML += '</table></div>'
  })

  return '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> ' + data.installDate + '</p><p><strong>차대번호:</strong> ' + data.vehicleVin + '</p><p><strong>제품명:</strong> ' + data.productName + '</p><p><strong>구성:</strong> ' + data.productConfig + '</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">' + checkedCount + '/' + totalCount + '</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">' + Object.keys(data.photos).length + '</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>' + checklistHTML + '<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">' + data.installerName + '</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="' + data.installerSignature + '" style="max-width:200px;max-height:80px;"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">' + data.customerName + '</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="' + data.customerSignature + '" style="max-width:200px;max-height:80px;"></td></tr></table></div><div style="text-align:center;margin-top:30px;padding-top:20px;border-top:2px solid #e0e0e0;color:#666;"><h3 style="color:#2c5aa0;">케이밴 경북지사</h3><p>전화: 053-XXX-XXXX | 이메일: kvan@example.com</p><p>A/S 보증: 3년 또는 6만km (선도래 기준)</p></div></div></body></html>'
}

// Generate email HTML with CID (Content-ID) references for attachments
export function generateEmailHTMLWithCID(data: ChecklistData): string {
  const checkedCount = Object.values(data.checklist).reduce((acc, sec) => acc + Object.values(sec).filter(v => v).length, 0)
  const totalCount = sections.reduce((acc, s) => acc + s.items.length, 0)
  
  let checklistHTML = ''
  sections.forEach((sec, si) => {
    checklistHTML += '<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">' + sec.title + '</h3><table style="width:100%;border-collapse:collapse;">'
    sec.items.forEach((item, ii) => {
      const checked = data.checklist[si]?.[ii] || false
      checklistHTML += '<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">' + item + '</td><td style="padding:10px;text-align:center;font-size:20px;">' + (checked ? '✅' : '⬜') + '</td></tr>'
      const photoKey = si + '-' + ii
      if (data.photos[photoKey]) {
        // Use CID reference instead of base64
        checklistHTML += '<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="cid:photo_' + photoKey + '" style="max-width:400px;max-height:300px;border-radius:8px;" alt="사진 ' + photoKey + '"></td></tr>'
      }
    })
    checklistHTML += '</table></div>'
  })

  return '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}img{display:block;margin:10px auto;}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> ' + data.installDate + '</p><p><strong>차대번호:</strong> ' + data.vehicleVin + '</p><p><strong>제품명:</strong> ' + data.productName + '</p><p><strong>구성:</strong> ' + data.productConfig + '</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">' + checkedCount + '/' + totalCount + '</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">' + Object.keys(data.photos).length + '</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>' + checklistHTML + '<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">' + data.installerName + '</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:installer_signature" style="max-width:200px;max-height:80px;" alt="시공자 서명"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">' + data.customerName + '</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:customer_signature" style="max-width:200px;max-height:80px;" alt="고객 서명"></td></tr></table></div><div style="margin-top:30px;padding:20px;background:#f9f9f9;border-radius:5px;"><p style="color:#666;font-size:12px;margin:5px 0;">본 점검표는 시공 완료 후 모든 항목 확인 및 쌍방 서명 후 보관됩니다.</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>A/S 보증기간:</strong> 3년 또는 6만km (선도래 기준)</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>케이밴 경북지사</strong> | 전화: 053-XXX-XXXX | 이메일: support@kvan.com</p><p style="color:#999;font-size:10px;margin:10px 0 0 0;">© 2026 케이밴 All Rights Reserved</p></div></div></body></html>'
}
