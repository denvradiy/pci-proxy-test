import React from 'react'

import AMX from '@/src/assets/img/brands/AMX.svg'
import CUP from '@/src/assets/img/brands/CUP.svg'
import DIN from '@/src/assets/img/brands/DIN.svg'
import DIS from '@/src/assets/img/brands/DIS.svg'
import DNK from '@/src/assets/img/brands/DNK.svg'
import ECA from '@/src/assets/img/brands/ECA.svg'
import ELO from '@/src/assets/img/brands/ELO.svg'
import JCB from '@/src/assets/img/brands/JCB.svg'
import MAU from '@/src/assets/img/brands/MAU.svg'
import UAP from '@/src/assets/img/brands/UAP.svg'
import VIS from '@/src/assets/img/brands/VIS.svg'
import VPY from '@/src/assets/img/brands/VPY.svg'
import cardEmpty from '@/src/assets/img/card-empty.svg'
import cardError from '@/src/assets/img/card-error.svg'
import cardRecognized from '@/src/assets/img/card-recognized.svg'
import cvcEmpty from '@/src/assets/img/cvc-empty.svg'
import cvcError from '@/src/assets/img/cvc-error.svg'

const ICON_MAP = {
  'card-empty': cardEmpty,
  'card-error': cardError,
  'card-recognized': cardRecognized,
  'cvv-empty': cvcEmpty,
  'cvv-error': cvcError,
  'cvc-empty': cvcEmpty,
  'cvc-error': cvcError,
  'brands/AMX': AMX,
  'brands/CUP': CUP,
  'brands/DIN': DIN,
  'brands/DIS': DIS,
  'brands/DNK': DNK,
  'brands/ECA': ECA,
  'brands/ELO': ELO,
  'brands/JCB': JCB,
  'brands/MAU': MAU,
  'brands/UAP': UAP,
  'brands/VIS': VIS,
  'brands/VPY': VPY
}

export default function SecureFieldIcon({ fieldType, iconType }) {
  return (
    <img
      alt={fieldType + '-' + iconType}
      className={'secure-field--card-icon secure-field--card-icon-' + iconType}
      src={ICON_MAP[iconType]}
    />
  )
}
