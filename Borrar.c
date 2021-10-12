//*** HEAD - INICIO
int Validate_Exit_SN(char *MSJ, char *ERROR_MSJ);
int Validate_OnlyNumberInt(char *buffer);
int Validate_OnlyNumberFloat(char *buffer);
int Validate_OnlyAlphabet(char *buffer);
int Validate_OnlyAlphabetWithSpaces(char *buffer);
//*** HEAD - INICIO

//*** VALIDACIONES - INICIO
int Validate_OnlyNumberInt(char *pData) {
    int rtn = 1;

    if (strlen(pData) > 0) {
        for (int i = 0; i < strlen(pData); i++) {
            if (isdigit(pData[i]) == 0) {
                if (i == 0) {
                    if (pData[0] != '-') {
                        rtn = 0;
                        break;
                    }
                } else {
                    rtn = 0;
                    break;
                }
            }
        }
    } else {
        rtn = 0;
    }

    return rtn;
}

int Validate_OnlyNumberFloat(char *pData) {
    int countSigno = 0;
    int rtn = 1;

    if (strlen(pData) > 0) {
        for (int i = 0; i < strlen(pData); i++) {

            if (pData[i] == '.' || pData[i] == ',') {
                countSigno++;
            } else {
                if (isdigit(pData[i]) == 0) {
                    if (i == 0) {
                        if (pData[0] != '-') {
                            rtn = 0;
                            break;
                        }
                    } else {
                        rtn = 0;
                        break;
                    }
                }
            }
        }

        if (countSigno > 1) {
            rtn = 0;
        }
    } else {
        rtn = 0;
    }

    return rtn;
}

int Validate_OnlyAlphabet(char *pData) {
    int rtn = 1;

    if (strlen(pData) > 0) {
        for (int i = 0; i < strlen(pData); i++) {
            if (isalpha(pData[i]) == 0) {
                rtn = 0;
                break;
            }
        }
    } else {
        rtn = 0;
    }

    return rtn;
}

int Validate_OnlyAlphabetWithSpaces(char *pData) {
    int rtn = 1;

    if (strlen(pData) > 0) {
        for (int i = 0; i < strlen(pData); i++) {
            if (isalpha(pData[i]) == 0) {
                if (isspace(pData[i]) == 0) {
                    rtn = 0;
                    break;
                }
            }
        }
    } else {
        rtn = 0;
    }

    return rtn;
}

int Validate_Exit_SN(char *MSJ, char *ERROR_MSJ) {
    int rtn = 0;
    char c;

    c = Get_Char(MSJ, ERROR_MSJ);
    c = toupper(c);

    while (c != 'S' && c != 'N') {
        puts("ERROR. OPCION NO VALIDA");
        c = Get_Char(MSJ, ERROR_MSJ);
        c = toupper(c);
    }

    if (c == 'S') {
        rtn = 1;
    }

    return rtn;
}
//*** VALIDACIONES - FIN
